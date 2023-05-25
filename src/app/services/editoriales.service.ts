import { Injectable } from '@angular/core';
import { Editorial } from '../models/editorial.model';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {
  
  constructor(private FireStore: Firestore){}

  getEditoriales(): Observable<Editorial[]>{
    const editorialRef = collection(this.FireStore,'editoriales');
    return collectionData(editorialRef, {idField: 'id'}) as Observable<Editorial[]>
  }

  async getEditorial(id:any){
    const libroDocRef = doc(this.FireStore, `editoriales/${id}`);
    const docSnap = await getDoc(libroDocRef)
    return docSnap.data()
  }


  agregarEditorial(editorial:Editorial){
    const editorialRef = collection(this.FireStore,'editoriales');
    return addDoc(editorialRef,editorial);
  }

  borrarEditorial(editorial:Editorial){
    const editorialRef = doc(this.FireStore, `editoriales/${editorial.id}`);
    return deleteDoc(editorialRef);
  }


  modificarLibro(id:any, datos:any){
    const libroDocRef = doc(this.FireStore, `editoriales/${id}`);
    updateDoc(libroDocRef,datos)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
  }

}
