import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-lista-tienda',
  templateUrl: './lista-tienda.component.html',
  styleUrls: ['./lista-tienda.component.css']
})
export class ListaTiendaComponent implements OnInit {

  libros: Libro[]

  constructor(private LibrosService: LibrosService, private TiendaService:TiendaService){
  }

  ngOnInit(): void {
    this.LibrosService.getLibros().subscribe(
      libros => {
        this.libros = libros;
      }
    )
  }


  onAgregarCarrito(libro:Libro){
    this.TiendaService.agregarCarrito(libro);
  }


}
