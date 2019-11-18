import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.page.html',
  styleUrls: ['./edit-invoice.page.scss'],
})
export class EditInvoicePage implements OnInit {

  invoice;

  constructor(private router: Router) { }

  ngOnInit() {
    this.invoice = this.router.getCurrentNavigation().extras.state;
    console.log(this.invoice)
  }

}
