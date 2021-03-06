import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { NavController, PopoverController, ModalController, ToastController } from '@ionic/angular';
import { Invoice } from '../models/invoice';
import { DatabaseService } from '../services/database/database.service';
import { PopoverComponent } from './popover.component';
import { Chart } from 'chart.js';
import { CATEGORYICONS } from '../entities/category-icons';
import { InvoiceModalComponent } from './invoice-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pieChart: Chart;

  userEmail: string;
  invoices: Invoice[];
  filteredInvoices: Invoice[];

  simulatedLoading = true;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private dataService: DatabaseService,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
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
      if (invoices.length > 0) {
        this.invoices = invoices;
        this.sortInvoicesByDate();
        this.filteredInvoices = this.invoices;
        setTimeout(() => this.createPieChart());
        setTimeout(() => {
          if (this.invoices)
            this.simulatedLoading = false;
        }, 1000);
        this.checkBudget();
      }
    });
  }

  async doRefresh(event) {
    await this.dataService.fetchInvoices();
    await this.dataService.fetchCategories();
    event.target.complete();
  }

  sortInvoicesByDate() {
    if (this.invoices) {
      this.invoices = this.invoices.sort((a, b) => +b.date - +a.date);
    }
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        this.navCtrl.navigateRoot(['/login']);
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

  async presentInvoiceModal(invoice) {
    const modal = await this.modalCtrl.create({
      component: InvoiceModalComponent,
      componentProps: { invoice },
      animated: true,
      cssClass: 'custom-modal-css'
    });
    return await modal.present();
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
              data: this.getValueOfInvoicesInCategories(),
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

  private getValueOfInvoicesInCategories(): number[] {
    let result = [];
    this.dataService.categories.forEach(category => {
      const invoices = this.invoices.filter(invoice => invoice.category === category);
      let moneyValue = 0;
      invoices.forEach(invoice => moneyValue += invoice.costs);
      result.push(moneyValue);
    });
    return result;
  }

  filterInvoices(event) {
    const chartElements = this.pieChart.getElementsAtEvent(event);

    if (chartElements.length > 0) {
      const category = this.dataService.categories[chartElements[0]["_index"]];
      this.filteredInvoices = this.invoices.filter(invoice => invoice.category === category);
    } else {
      this.filteredInvoices = this.invoices;
    }
  }

  getCategoryIcon(category: string): string {
    return CATEGORYICONS.find(element => element.category == category).icon;
  }

  private async checkBudget() {
    const budget = await this.dataService.getBudget();
    let spentAmount = 0;
    this.invoices.forEach(inv => spentAmount = spentAmount + inv.costs);

    if (budget < spentAmount) {
      const toast = this.toastCtrl.create({
        message: `Sie sind ${Math.round((spentAmount - budget) * 100) / 100}€ über dem Budget. Ihr Vorgesetzter wurde benachrichtigt.`,
        duration: 5000,
        showCloseButton: true,
        closeButtonText: 'Okay',
      });
      (await toast).present();
    }
  }

}
