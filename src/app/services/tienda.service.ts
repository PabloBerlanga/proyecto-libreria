import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  //Array carrito

  private miLista:Libro[] = [];

  //Carrito observable
  private miCarrito = new BehaviorSubject<Libro[]>([]);
  miCarrito$ = this.miCarrito.asObservable();


  constructor() { }

  agregarCarrito(libro:Libro){
    
    if(this.miLista.length === 0){
      libro.cantidadCarrito = 1;
      this.miLista.push(libro);
      this.miCarrito.next(this.miLista);
    } else {
      const libroMod = this.miLista.find((element)=>{
        return element.id === libro.id
      })
      if(libroMod){
        libroMod.cantidadCarrito = libroMod.cantidadCarrito + 1;
        this.miCarrito.next(this.miLista);
      }else{
        libro.cantidadCarrito = 1;
        this.miLista.push(libro)
        this.miCarrito.next(this.miLista);
      }
    }


  }




}
