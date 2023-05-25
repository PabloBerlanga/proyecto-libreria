import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { Firestore, addDoc, collection, collectionData, doc, deleteDoc, getDoc, updateDoc } from '@angular/fire/firestore'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private FireStore: Firestore){}

  getLibros(): Observable<Libro[]>{
    const libroRef = collection(this.FireStore,'libros');
    return collectionData(libroRef, {idField: 'id'}) as Observable<Libro[]>
  }

  async getLibro(id:any){
    const libroDocRef = doc(this.FireStore, `libros/${id}`);
    const docSnap = await getDoc(libroDocRef)
    return docSnap.data()
  }


  agregarLibro(libro:Libro){
    const libroRef = collection(this.FireStore,'libros');
    return addDoc(libroRef,libro);
  }

  borrarLibro(libro:Libro){
    const libroDocRef = doc(this.FireStore, `libros/${libro.id}`);
    return deleteDoc(libroDocRef);
  }

  modificarLibro(id:any, datos:any){
    const libroDocRef = doc(this.FireStore, `libros/${id}`);
    updateDoc(libroDocRef,datos)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
  }

}
