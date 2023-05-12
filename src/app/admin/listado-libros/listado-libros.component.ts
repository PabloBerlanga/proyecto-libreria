import { Component, OnInit} from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';


@Component({
  selector: 'app-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit{

  libros: Libro[] = []

  constructor(private LibrosService: LibrosService){
  }
  ngOnInit(): void {
    this.LibrosService.getLibros().subscribe(
      libros => {
        this.libros = libros;
      }
    )
  }
}
