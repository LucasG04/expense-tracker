import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'invoice-detail-modal',
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
    #note-col {
      text-overflow: ellipsis;
      overflow: hidden;
      max-height: 80px;
    }
    </style>

    <ion-grid id="grid">
    <ion-row>
      <ion-col size="11">
        <h3 class="section-title">{{invoice.title}}</h3>
      </ion-col>
      <ion-col size="1" style="margin: auto 0;">
      <ion-button color="dark" fill="clear" shape="round" size="small" (click)="dismissModal()">
        <ion-icon slot="icon-only" name="close-circle"></ion-icon>
      </ion-button>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4">
        Betrag:
      </ion-col>
      <ion-col size="8">
        {{invoice.costs | germanCosts}} €
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4">
        Datum:
      </ion-col>
      <ion-col size="8">
        {{invoiceDate.toLocaleDateString()}}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4">
        Kategorie:
      </ion-col>
      <ion-col size="8">
        {{invoice.category | titlecase }}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4">
        Notiz:
      </ion-col>
      <ion-col size="8" id="note-col">
        {{invoice.note}}
      </ion-col>
    </ion-row>
    <ion-grid>
    `
})

export class InvoiceModalComponent implements OnInit {

  invoiceDate: Date;

  constructor(
    private modalCtrl: ModalController
  ) { }

  @Input() invoice: Invoice;
  ngOnInit() {
    this.invoiceDate = new Date(+this.invoice.date);
  }

  async dismissModal() {
    await this.modalCtrl.dismiss();
  }
}