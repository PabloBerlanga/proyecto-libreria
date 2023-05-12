import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent {
  
  nombreUsuario: string;
  correoUsuario: string;
  userUsuario: string;
  passUsuario: string;
  tipoUsuario: string;

  constructor(private UsuariosServices:UsuariosService,private route:Router){

  }

  crearUsuario(){
    let nuevoUsuario = new Usuario(this.nombreUsuario,this.correoUsuario,this.userUsuario,this.passUsuario,this.tipoUsuario);
    this.UsuariosServices.agregarUsuario(nuevoUsuario);
    this.route.navigate(['admin/usuarios']);
  }
}
