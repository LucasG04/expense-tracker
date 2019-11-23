import { Component, OnInit, Input } from '@angular/core';
import { NavParams, NavController, PopoverController } from '@ionic/angular';
import { DatabaseService } from '../services/database/database.service';
import { Invoice } from '../models/invoice';

@Component({
    selector: 'selector-name',
    template: `
        <ion-list lines="none">
            <ion-item (click)="editInvoice()" detail>
                <ion-icon name="create" slot="start"></ion-icon>
                <ion-label>Bearbeiten</ion-label>
            </ion-item>
            <ion-item (click)="deleteInvoice()">
                <ion-icon name="trash" slot="start"></ion-icon>
                <ion-label>Löschen</ion-label>
            </ion-item>
        </ion-list>
    `
})

export class PopoverComponent implements OnInit {

    @Input() invoice: Invoice;
    constructor(
        private navCtrl: NavController,
        private popoverCtrl: PopoverController,
        private dataService: DatabaseService) { }

    ngOnInit() { }

    editInvoice() {
        this.navCtrl.navigateForward(['/edit-invoice'], { animated: true, state: this.invoice });
        this.dismissPopover();
    }

    deleteInvoice() {
        this.dataService.deleteInvoice(this.invoice.id);
        this.dismissPopover();
    }

    async dismissPopover() {
        await this.popoverCtrl.dismiss();
    }
}