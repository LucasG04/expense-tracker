import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Invoice } from '../models/invoice';
import { NavController } from '@ionic/angular';

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

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private dataService: DatabaseService) { }

  ngOnInit() {
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
      date: new FormControl(this.msDateToISO8601(+this.invoice.date), Validators.compose([
        Validators.required
      ])),
      note: new FormControl(this.invoice.note, Validators.compose([
        Validators.required
      ])),
    });
  }

  editInvoice(invoice: Invoice) {
    invoice.date = this.ISO8601toDate(invoice.date).getTime().toString();
    this.dataService.updateInvoice(invoice).subscribe(() => this.navCtrl.back());
  }

  ISO8601toDate(dateStr: string): Date {
    const parts = dateStr.substring(0,10).split('-');
    const date = new Date();
    date.setFullYear(+parts[0], +parts[1]-1, +parts[2]);
    return date;
  }

  msDateToISO8601(ms: number): string {
    const date = new Date();
    date.setTime(ms);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  }

}

const validation_messages = {
  'title': [
    { type: 'required', message: 'Email is required.' },
  ],
  'costs': [
    { type: 'required', message: 'Costs are required.' },
  ],
  'category': [
    { type: 'required', message: 'Category is required.' },
  ],
  'date': [
    { type: 'required', message: 'Date is required.' },
  ],
  'note': [
    { type: 'required', message: 'Note is required.' },
  ],
};
