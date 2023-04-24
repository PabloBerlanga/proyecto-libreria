import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registroNombre:string;
  registroEmail:string;
  registroUsuario:String;
  registroContra:String;

  login(inicioUsuario:HTMLInputElement,inicioContra:HTMLInputElement){

  }

  register(){

  }


}
