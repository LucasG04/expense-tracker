import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, } from '@ionic/angular';
import { Invoice } from '../models/invoice';

@Component({
    selector: 'selector-name',
    template: `
    <style>
    .section-title {
        //margin: 5px 0 0 10px;
        font-weight: bolder;
    }
    </style>

    <ion-grid>
    <ion-row>
      <ion-col>
        <h2 class="section-title">Historie</h2>
      </ion-col>
    </ion-row>
    <ion-grid>
    `
})

export class InvoiceModalComponent implements OnInit {

    invoice: Invoice;

    constructor(
        private navParams: NavParams,
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {
        this.invoice = this.navParams.data.invoice;
    }

    async dismissModal() {
        await this.modalCtrl.dismiss();
    }
}