import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor(private FireStore: Firestore){}

  getUsuarios(): Observable<Usuario[]>{
    const usuarioRef = collection(this.FireStore,'usuarios');
    return collectionData(usuarioRef, {idField: 'id'}) as Observable<Usuario[]>
  }


  agregarUsuario(usuario:Usuario){
    const usuarioRef = collection(this.FireStore,'usuarios');
    return addDoc(usuarioRef,usuario);
  }

  borrarUsuario(usuario:Usuario){
    const usuarioDocRef = doc(this.FireStore, `usuarios/${usuario.id}`);
    return deleteDoc(usuarioDocRef);
  }
}
