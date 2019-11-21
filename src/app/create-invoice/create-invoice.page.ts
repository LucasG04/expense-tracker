import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Invoice } from '../models/invoice';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../services/database/database.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.page.html',
  styleUrls: ['./create-invoice.page.scss'],
})
export class CreateInvoicePage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  validation_messages = validation_messages;
  categories = [];

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private dataService: DatabaseService
  ) { }

  ngOnInit() {
    this.categories = this.dataService.categories;

    this.validations_form = this.formBuilder.group({
      title: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      costs: new FormControl('', Validators.compose([
        Validators.required
      ])),
      category: new FormControl(),
      date: new FormControl('', Validators.compose([
        Validators.required
      ])),
      note: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  createInvoice(invoice: Invoice) {
    invoice.date = this.ISO8601toDate(invoice.date).getTime().toString();
    this.dataService.createInvoice(invoice).subscribe(() => this.navCtrl.back());
  }

  ISO8601toDate(dateStr: string): Date {
    const parts = dateStr.substring(0,10).split('-');
    const date = new Date();
    date.setFullYear(+parts[0], +parts[1]-1, +parts[2]);
    return date;
  }

  private getTodayAsISO8601(): string {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  }

}

const validation_messages = {
  'title': [
    { type: 'required', message: 'Titel wird benötigt' },
  ],
  'costs': [
    { type: 'required', message: 'Rechnungsbetrag wird benötigt' },
  ],
  'category': [
    { type: 'required', message: 'Kategorie wird benötigt' },
  ],
  'date': [
    { type: 'required', message: 'Rechnungsdatum wird benötigt' },
  ],
  'note': [
    { type: 'required', message: 'Notiz wird benötigt' },
  ],
};
