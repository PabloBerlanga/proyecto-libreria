import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { TiendaService } from 'src/app/services/tienda.service';
import { CompraComponent } from '../compra/compra.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  miCarrito$ = this.TiendaService.miCarrito$;
  miLista:Libro[];

  constructor(private TiendaService: TiendaService, private router:Router) {}

  totalProductos(precio: number, cantidad: number) {
    return precio * cantidad;
  }

  modificarNumeroProductos(id: any, operacion: string) {
    const libro = this.TiendaService.buscarPorID(id);
    if (libro) {
      if (operacion === '-' && libro.cantidadCarrito > 0) {
        libro.cantidadCarrito = libro.cantidadCarrito - 1;
      }
      if (operacion === '+') {
        if(libro.cantidadCarrito >= libro.cantidad){
          alert('No quedan existencias de este producto');
        }else{
          libro.cantidadCarrito = libro.cantidadCarrito + 1;
        }
      }
      if (libro.cantidadCarrito == 0) {
        this.borrarProducto(id);
      }
    }

  }

  borrarProducto(id: any) {
    const libro = this.TiendaService.buscarPorID(id);
    this.TiendaService.borrarProducto(id);
    if(libro){
      libro.cantidadCarrito = 0;
    }
    
  }

  totalCarrito(){
    const total = this.TiendaService.totalCarrito();
    return total;
  }

  confirmarCompra(){
    this.miLista = this.TiendaService.miLista

    localStorage.setItem("Carrito",JSON.stringify(this.miLista))
    this.router.navigate(['tienda/compra'])
  }
}
