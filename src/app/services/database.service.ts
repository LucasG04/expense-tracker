import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Invoice } from '../models/invoice';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private invoices: Observable<Invoice[]>;
  private invoiceCollection: AngularFirestoreCollection<Invoice>;
 
  constructor(private afs: AngularFirestore) {
    this.invoiceCollection = this.afs.collection<Invoice>('invoices');
    this.invoices = this.getInvoices();
  }
 
  getInvoices(): Observable<Invoice[]> {
    return this.invoiceCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getInvoice(id: string): Observable<Invoice> {
    return this.invoiceCollection.doc<Invoice>(id).valueChanges();
  }
 
  addInvoice(invoice: Invoice): Promise<DocumentReference> {
    return this.invoiceCollection.add(invoice);
  }
 
  updateInvoice(invoice: Invoice): Promise<void> {
    return this.invoiceCollection.doc(invoice.id).update(invoice);
  }
 
  deleteInvoice(id: string): Promise<void> {
    return this.invoiceCollection.doc(id).delete();
  }
}
