import { Component } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { NavController, PopoverController } from '@ionic/angular';
import { Invoice } from '../models/invoice';
import { DatabaseService } from '../services/database.service';
import { PopoverComponent } from './popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userEmail: string;
  invoices: Invoice[];

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private dataService: DatabaseService,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.initializeHome();
    } else {
      // this.navCtrl.navigateRoot(['/login']);
    }
  }

  initializeHome() {
    this.userEmail = this.authService.userDetails().uid;
    this.dataService.invoices.subscribe((invoices) => this.invoices = invoices);
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
      componentProps: {invoice},
      animated: true,
      showBackdrop: true
    });
    return await popvoer.present();
  }

  navigateToAddInvoice() {
    this.navCtrl.navigateForward(['/create-invoice'], { animated: true });
  }

}
