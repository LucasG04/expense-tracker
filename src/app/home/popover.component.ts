import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
    selector: 'selector-name',
    template: `
        <ion-list lines="none">
            <ion-list-header>
                <h4>Invoice: {{invoice.title}}</h4>
            </ion-list-header>
            <ion-item (click)="editInvoice()" detail>
                <ion-icon name="create" slot="start"></ion-icon>
                <ion-label>Bearbeiten</ion-label>
            </ion-item>
            <ion-item (click)="deleteInvoice()" detail>
                <ion-icon name="trash" slot="start"></ion-icon>
                <ion-label>Löschen</ion-label>
            </ion-item>
        </ion-list>
    `
})

export class PopoverComponent implements OnInit {

    invoice;

    constructor(private navParams: NavParams) { }

    ngOnInit() {
        this.invoice = this.navParams.data.invoice;
    }

    editInvoice() {

    }

    deleteInvoice() {

    }
}