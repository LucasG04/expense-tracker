import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { Invoice } from '../models/invoice';
import { NavController } from '@ionic/angular';
import { DateUtils } from '../utils';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.page.html',
  styleUrls: ['./edit-invoice.page.scss'],
})
export class EditInvoicePage implements OnInit {

  invoice: Invoice;

  validations_form: FormGroup;
  errorMessage: string = '';
  validation_messages = validation_messages;
  categories = [];
  saving = false;

  dateUtils;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private dataService: DatabaseService) { }

  ngOnInit() {
    this.dateUtils = new DateUtils();
    this.invoice = this.router.getCurrentNavigation().extras.state as Invoice;
    this.categories = this.dataService.categories;
    
    this.validations_form = this.formBuilder.group({
      id: new FormControl(this.invoice.id),
      title: new FormControl(this.invoice.title, Validators.compose([
        Validators.required,
      ])),
      costs: new FormControl(this.invoice.costs, Validators.compose([
        Validators.required
      ])),
      category: new FormControl(this.invoice.category),
      date: new FormControl(this.dateUtils.msDateToISO8601(+this.invoice.date), Validators.compose([
        Validators.required
      ])),
      note: new FormControl(this.invoice.note, Validators.compose([
        Validators.required
      ])),
    });
  }

  editInvoice(invoice: Invoice) {
    invoice.date = this.dateUtils.ISO8601toDate(invoice.date).getTime().toString();
    this.saving = true;
    this.dataService.updateInvoice(invoice).subscribe(() => {
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
