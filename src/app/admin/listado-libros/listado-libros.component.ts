import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';


@Component({
  selector: 'app-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit{

  libros: Libro[] = []

  constructor(private LibrosService: LibrosService,private router: Router){
  }
  ngOnInit(): void {
    this.LibrosService.getLibros().subscribe(
      libros => {
        this.libros = libros;
      }
    )
  }

  borrarLibro(libro:Libro){
    if(window.confirm("¿Estas seguro de que quieres borrar este libro?")){
      this.LibrosService.borrarLibro(libro)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }
  }



}
