import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { BehaviorSubject } from 'rxjs';
import { Compra } from '../models/compra.model';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  //Array carrito
  miLista: Libro[] = [];

  //Carrito observable
  private miCarrito = new BehaviorSubject<Libro[]>([]);
  miCarrito$ = this.miCarrito.asObservable();


  constructor(private FireStore: Firestore) { }

  agregarCarrito(libro: Libro) {

    if (this.miLista.length === 0) {
      libro.cantidadCarrito = 1;
      this.miLista.push(libro);
      this.miCarrito.next(this.miLista);
    } else {
      const libroMod = this.miLista.find((element) => {
        return element.id === libro.id
      })
      if (libroMod) {
        libroMod.cantidadCarrito = libroMod.cantidadCarrito + 1;
        this.miCarrito.next(this.miLista);
      } else {
        libro.cantidadCarrito = 1;
        this.miLista.push(libro)
        this.miCarrito.next(this.miLista);
      }
    }


  }

  borrarProducto(id: string) {
    this.miLista = this.miLista.filter((producto) => {
      return producto.id != id
    })
    this.miCarrito.next(this.miLista);

  }

  buscarPorID(id: any) {
    return this.miLista.find((producto) => {
      return producto.id === id;
    })
  }

  totalCarrito(){
    const total = this.miLista.reduce(
      function (acc, libro)
      {return acc + (libro.cantidadCarrito * libro.precio);}
      ,0)
    return total;
  }




}
