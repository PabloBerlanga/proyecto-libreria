import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuario[] = [
    new Usuario("Administrador","admin@admin.com","admin","1234","Administrador"),
    new Usuario("Usuario","usuario@usuario.com","user","1234","Usuario")
  ]


  agregarUsuario(nuevoUsuario: Usuario){
    this.usuarios.push(nuevoUsuario);
  }
}
