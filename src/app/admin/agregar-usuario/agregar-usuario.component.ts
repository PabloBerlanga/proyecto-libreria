import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent {
  
  constructor(private UsuariosServices:UsuariosService,private route:Router, private LoginService: LoginService){

  }

  datosUsuario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    admin: new FormControl('', [Validators.required])
  })

  get nombre() {
    return this.datosUsuario.get('nombre');
  }

  get correo() {
    return this.datosUsuario.get('correo');
  }

  get user() {
    return this.datosUsuario.get('user');
  }

  get password() {
    return this.datosUsuario.get('password');
  }

  get admin() {
    return this.datosUsuario.get('admin');
  }


  crearUsuario(){
    console.log(this.datosUsuario.value)
    const nuevoUsuario: Usuario = {
      nombre: this.datosUsuario.value.nombre,
      correo: this.datosUsuario.value.correo,
      user: this.datosUsuario.value.user,
      password: this.datosUsuario.value.password,
      admin: this.datosUsuario.value.admin,
    }
    this.LoginService.register(this.datosUsuario.value)
    .then(response => console.log(response))
    .catch(error => console.log(error))

    this.UsuariosServices.agregarUsuario(nuevoUsuario)
    .then(response => console.log(response))
    .catch(error => console.log(error));
    this.route.navigate(['admin/usuarios']);
  }
}
