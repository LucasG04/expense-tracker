import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { NavController, PopoverController } from '@ionic/angular';
import { Invoice } from '../models/invoice';
import { DatabaseService } from '../services/database.service';
import { PopoverComponent } from './popover.component';
import { Chart } from 'chart.js';

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
    private authService: AuthenticateService,
    private dataService: DatabaseService,
    private popoverCtrl: PopoverController
  ) { }

  @ViewChild('pieCanvas', { static: false }) pieCanvas: ElementRef;
  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.initializeHome();
    } else {
      // this.navCtrl.navigateRoot(['/login']);
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

  async presentPopoverForInvoice(invoice) {
    const popvoer = await this.popoverCtrl.create({
      component: PopoverComponent,
      componentProps: { invoice },
      animated: true,
      showBackdrop: true
    });
    return await popvoer.present();
  }

  navigateToAddInvoice() {
    this.navCtrl.navigateForward(['/create-invoice'], { animated: true });
  }

  createPieChart() {
    if (this.dataService.categories) {
      this.pieChart = new Chart(this.pieCanvas.nativeElement, {
        type: "pie",
        data: {
          labels: this.dataService.categories.map(category => {
            return category.charAt(0).toUpperCase() + category.slice(1);
          }),
          datasets: [
            {
              label: "# der Rechnungen",
              data: this.getNumberOfInvoicesInCategories(),
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                // "rgba(255, 206, 86, 0.2)",
                // "rgba(75, 192, 192, 0.2)",
                // "rgba(153, 102, 255, 0.2)",
                // "rgba(255, 159, 64, 0.2)"
              ],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", /*"#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"*/]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'bottom',
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

}
