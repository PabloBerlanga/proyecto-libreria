import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  getDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra.model';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  constructor(private FireStore: Firestore) {}

  getCompras(): Observable<Compra[]> {
    const compraRef = collection(this.FireStore, 'compras');
    return collectionData(compraRef, { idField: 'id' }) as Observable<Compra[]>;
  }

  comprarProductos(compra: Compra) {
    const compraRef = collection(this.FireStore, 'compras');
    return addDoc(compraRef, compra);
  }
}
