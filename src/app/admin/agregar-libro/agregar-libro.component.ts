import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent {

  libros: Libro[];
  libro: Libro ={
    titulo: '',
    autor: '',
    precio: 0,
    fechaSalida: '',
    editorial: '',
    cantidad: 0,
    cantidadCarrito: 0
  }
  
  constructor(private librosServicio: LibrosService, private router: Router) { }

  ngOnInit() {
    this.librosServicio.getLibros().subscribe(
      libros => {
        this.libros = libros;
      }
    )
  }

  agregar({value}: {value: Libro}){
      this.librosServicio.agregarLibro(value);
      this.router.navigate(['admin/libros'])
    }
  }
