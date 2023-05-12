import { Component } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  miCarrito$ = this.TiendaService.miCarrito$;

  constructor(private TiendaService:TiendaService){

  }
}
