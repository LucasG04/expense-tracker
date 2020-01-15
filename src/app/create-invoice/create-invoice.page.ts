import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Invoice } from '../models/invoice';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../services/database/database.service';
import { DateUtils } from '../utils';

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
  saving = false;

  dateUtils;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private dataService: DatabaseService
  ) { }

  ngOnInit() {
    this.dateUtils = new DateUtils();
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
    invoice.date = this.dateUtils.ISO8601toDate(invoice.date).getTime().toString();
    this.saving = true;
    this.dataService.createInvoice(invoice).subscribe(() => {
      this.saving = false;
      this.navCtrl.back();
    });
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
