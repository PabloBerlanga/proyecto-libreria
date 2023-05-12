import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  librosColeccion: AngularFirestoreCollection<Libro>;
  libroDoc: AngularFirestoreDocument<Libro>;
  libros: Observable<Libro[]>;
  libro: Observable<Libro>;

  constructor(private db: AngularFirestore){
    this.librosColeccion = db.collection('libros')
  }
  

  getLibros(): Observable<Libro[]>{
    this.libros = this.librosColeccion.snapshotChanges().pipe(
      map( cambios => {
        return cambios.map( accion => {
          const datos = accion.payload.doc.data() as Libro;
          datos.id = accion.payload.doc.id;
          return datos;
        })
      })
    )
    return this.libros
  }

  agregarLibro(libro: Libro){
    //this.libros.push(libro);
    this.librosColeccion.add(libro);
  }

}
