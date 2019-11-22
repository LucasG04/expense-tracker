import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, } from '@ionic/angular';
import { Invoice } from '../models/invoice';

@Component({
    selector: 'selector-name',
    template: `
    <style>
    #grid {
        width: 80%;
    }
    .section-title {
        //margin: 5px 0 0 10px;
        font-weight: bolder;
    }
    .label-col {
        width: 30%;
    }
    </style>

    <ion-grid id="grid">
    <ion-row>
      <ion-col>
        <h3 class="section-title">Historie</h3>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4">
        Titel:
      </ion-col>
      <ion-col size="8">
        {{invoice.title}}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4">
        Betrag:
      </ion-col>
      <ion-col size="8">
        {{invoice.costs}}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4">
        Datum:
      </ion-col>
      <ion-col size="8">
        {{invoice.date}}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4">
        Kategorie:
      </ion-col>
      <ion-col size="8">
        {{invoice.category}}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4">
        Notiz:
      </ion-col>
      <ion-col size="8">
        {{invoice.note}}
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