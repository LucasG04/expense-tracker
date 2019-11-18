import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from "rxjs/operators";
import { Invoice } from '../models/invoice';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private invoices: Observable<Invoice[]>;
  private invoiceCollection: AngularFirestoreCollection<Invoice>;
 
  constructor(private afs: AngularFirestore, private authService: AuthenticateService) {
    this.invoiceCollection = this.afs.collection<Invoice>('invoices');
    this.invoices = this.getInvoices();
  }
 
  getInvoices(): Observable<Invoice[]> {
    return this.invoiceCollection.get().pipe(
      map(snapshot => {
        return snapshot.docs.filter(doc => doc.data().billerid == this.authService.userDetails().uid).map(doc => {
          const invoice = doc.data();
          invoice.id = doc.id;
          return invoice as Invoice;
        });
      })
    );
  }
 
  getInvoice(id: string): Observable<Invoice> {
    return this.invoiceCollection.doc<Invoice>(id).valueChanges();
  }
 
  addInvoice(invoice: Invoice): Observable<DocumentReference> {
    const promise = this.invoiceCollection.add(invoice);
    return from(promise);
  }
 
  updateInvoice(invoice: Invoice): Observable<void> {
    const promise = this.invoiceCollection.doc(invoice.id).update(invoice);
    return from(promise);
  }
 
  deleteInvoice(id: string): Observable<void> {
    const promise = this.invoiceCollection.doc(id).delete();
    return from(promise);
  }
}
