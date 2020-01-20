import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { map, retry } from "rxjs/operators";
import { Invoice } from '../../models/invoice';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private invoiceCollection: AngularFirestoreCollection<Invoice>;
  private generalCollection: AngularFirestoreCollection<Invoice>;

  private _invoices: BehaviorSubject<Invoice[]> = new BehaviorSubject([]);
  private _categories: String[];
 
  constructor(private afs: AngularFirestore, private authService: AuthenticationService) {
    this.generalCollection = this.afs.collection<Invoice>('general');
    this.invoiceCollection = this.afs.collection<Invoice>('invoices');
    this.fetchCategories();
    this.fetchInvoices();
  }

  async fetchInvoices() {
    this._invoices.next(await this.getInvoices())
  }

  async fetchCategories() {
    this._categories = await this.getCategories();
  }

  get invoices(): BehaviorSubject<Invoice[]> {
    return this._invoices;
  }

  get categories(): String[] {
    return this._categories;
  }
 
  private getInvoices(): Promise<Invoice[]> {
    return this.invoiceCollection.get().pipe(
      map(snapshot => {
        return snapshot.docs.filter(doc => doc.data().billerid == this.authService.userDetails().uid).map(doc => {
          const invoice = doc.data();
          invoice.id = doc.id;
          return invoice as Invoice;
        });
      }),
      retry(2)
    ).toPromise();
  }
 
  getInvoice(id: string): Observable<Invoice> {
    return this.invoiceCollection.doc<Invoice>(id).valueChanges();
  }
 
  createInvoice(invoice: Invoice): Observable<DocumentReference> {
    invoice.billerid = this.authService.userDetails().uid;
    const promise = this.invoiceCollection.add(invoice).finally(() => this.fetchInvoices());
    return from(promise);
  }
 
  updateInvoice(invoice: Invoice): Observable<void> {
    const promise = this.invoiceCollection.doc(invoice.id).update(invoice).finally(() => this.fetchInvoices());
    return from(promise);
  }
 
  deleteInvoice(id: string): Observable<void> {
    const promise = this.invoiceCollection.doc(id).delete().finally(() => this.fetchInvoices());
    return from(promise);
  }

  getCategories(): Promise<String[]> {
    return this.generalCollection.doc('categories').get().pipe(
      map(snapshot => {
        return snapshot.data().categories;
      }),
      retry(2)
    ).toPromise();
  }

  getBudget(): Promise<number> {
    // TODO: get budget for specific user
    return new Promise((res, rej) => res(500));
  }
}
