import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent {
  
  usuarios: Usuario[]

  constructor(private UsuariosServices: UsuariosService){
    this.usuarios = this.UsuariosServices.usuarios;
  }
}
