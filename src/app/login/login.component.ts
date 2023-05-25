import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private router:Router, private usuarioSevice: UsuariosService){

  }

  ngOnInit(): void{
    this.usuarioSevice.getUsuarios().subscribe(
      usuarios => {
        this.listadoUsuarios = usuarios;
      }
    )
  }



  listadoUsuarios: Usuario[] = []


  loginForm = new FormGroup({
    correo: new FormControl('',[Validators.required, Validators.email]),
    contra: new FormControl('',[Validators.required])
  })

  registerForm = new FormGroup({
    registroNombre: new FormControl('', [Validators.required]),
    correo: new FormControl('',[Validators.required, Validators.email]),
    registroUsuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get correo(){
    return this.loginForm.get('correo');
  }

  get contra(){
    return this.loginForm.get('contra');
  }

  get registroNombre(){
    return this.registerForm.get('registroNombre');
  }

  get correoR(){
    return this.registerForm.get('CorreoR');
  }

  get registroUsuario(){
    return this.registerForm.get('registroUsuario');
  }

  get password(){
    return this.registerForm.get('password');
  }

  userLogin(){
    //console.log(this.loginForm.value)

    for(let usuario of this.listadoUsuarios){
      if(usuario.correo == this.loginForm.value.correo){
        switch(usuario.admin){
          case "Administrador":{
            this.LoginService.login(this.loginForm.value).then(response =>{
              //console.log(response);
              this.router.navigate(['admin'])}
            ).catch(error => console.log(error))
            break;
          }
          default: {
            this.LoginService.login(this.loginForm.value).then(response =>{
              //console.log(response);
              this.router.navigate(['tienda'])}
            ).catch(error => console.log(error))
          }
        }
      }
    }

  }

  userRegister(){
    //console.log(this.registerForm.value)
    this.LoginService.register(this.registerForm.value).then(response =>{
      //console.log(response);

      const nuevoUsuario: Usuario = {
        nombre:this.registerForm.value.registroNombre,
        correo:this.registerForm.value.correo,
        user:this.registerForm.value.registroUsuario,
        password:this.registerForm.value.password,
        admin:"Usuario"
      }

      this.usuarioSevice.agregarUsuario(nuevoUsuario);

      alert("Usuario registrado con exito, pruebe a iniciar sesion");

      }
    ).catch(error => console.log(error))
  }

  loginGoogle(){
    this.LoginService.loginGoogle()
    .then(response => {
      console.log(response)
      this.router.navigate(['tienda'])
    })
    .catch(error => console.log(error))
  }


}
