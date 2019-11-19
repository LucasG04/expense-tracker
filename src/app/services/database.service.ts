import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";
import { Invoice } from '../models/invoice';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public invoices: BehaviorSubject<Invoice[]> = new BehaviorSubject([]);
  private invoiceCollection: AngularFirestoreCollection<Invoice>;
 
  constructor(private afs: AngularFirestore, private authService: AuthenticateService) {
    this.invoiceCollection = this.afs.collection<Invoice>('invoices');
    this.fetchInvoices();
  }

  private async fetchInvoices() {
    this.invoices.next(await this.getInvoices())
  }
 
  getInvoices(): Promise<Invoice[]> {
    return this.invoiceCollection.get().pipe(
      map(snapshot => {
        return snapshot.docs.filter(doc => doc.data().billerid == this.authService.userDetails().uid).map(doc => {
          const invoice = doc.data();
          invoice.id = doc.id;
          return invoice as Invoice;
        });
      })
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
}
