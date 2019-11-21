import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { NavController, PopoverController } from '@ionic/angular';
import { Invoice } from '../models/invoice';
import { DatabaseService } from '../services/database/database.service';
import { PopoverComponent } from './popover.component';
import { Chart } from 'chart.js';
import { CATEGORYICONS } from '../entities/category-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pieChart: Chart;

  userEmail: string;
  invoices: Invoice[];

  simulatedLoading = true;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private dataService: DatabaseService,
    private popoverCtrl: PopoverController
  ) { }

  @ViewChild('pieCanvas', { static: false }) pieCanvas: ElementRef;
  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.initializeHome();
    }
  }

  initializeHome() {
    this.userEmail = this.authService.userDetails().uid;
    this.dataService.invoices.subscribe((invoices) => {
      this.invoices = invoices;
      this.sortInvoicesByDate();
      setTimeout(() => this.createPieChart());
      setTimeout(() => {
        if (this.invoices)
          this.simulatedLoading = false;
      }, 2000);
    });
  }

  sortInvoicesByDate() {
    if (this.invoices) {
      this.invoices = this.invoices.sort((a, b) => +b.date - +a.date);
    }
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateRoot(['/login']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getLocaleDateByMilliseconds(ms: string) {
    return new Date(+ms).toLocaleDateString();
  }

  async presentPopoverForInvoice(invoice, event) {
    const popvoer = await this.popoverCtrl.create({
      component: PopoverComponent,
      componentProps: { invoice },
      event,
      animated: true,
    });
    return await popvoer.present();
  }

  navigateToAddInvoice() {
    this.navCtrl.navigateForward(['/create-invoice'], { animated: true });
  }

  createPieChart() {
    if (this.dataService.categories) {
      this.pieChart = new Chart(this.pieCanvas.nativeElement, {
        type: "doughnut",
        data: {
          labels: this.dataService.categories.map(category => {
            return category.charAt(0).toUpperCase() + category.slice(1);
          }),
          datasets: [
            {
              label: "# der Rechnungen",
              data: this.getNumberOfInvoicesInCategories(),
              backgroundColor: [
                "rgba(40, 45, 76, 0.8)",
                "rgba(224, 240, 230, 0.8)",
                "rgba(33, 206, 189, 0.8)",
                "rgba(219, 59, 104, 0.8)",
                "rgba(255, 188, 56, 0.8)",
              ],
              hoverBackgroundColor: [
                "rgb(40, 45, 76)",
                "rgb(224, 240, 230)",
                "rgb(33, 206, 189)",
                "rgb(219, 59, 104)",
                "rgb(255, 188, 56)",
              ],
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'bottom',
          },
          elements: {
            arc: {
              borderWidth: 0
            }
          }
        }
      });
    }
  }

  private getNumberOfInvoicesInCategories(): number[] {
    let result = [];
    this.dataService.categories.forEach(category => {
      const count = this.invoices.filter(invoice => invoice.category === category).length;
      result.push(count);
    });
    return result;
  }

  private getCategoryIconName(category: string): string {
    return CATEGORYICONS.find(element => element.category == category).icon;
  }

}
