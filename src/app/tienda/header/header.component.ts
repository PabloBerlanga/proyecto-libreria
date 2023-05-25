import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private TiendaService: TiendaService, private loginService: LoginService, private router: Router){}

  matBadge:number = this.TiendaService.miLista.length;

  verCarrito:boolean = false;

  logOut(){
    this.loginService.logOut()
    this.router.navigate(['/login'])
  }



  onToggleCarrito(){
    this.verCarrito = !this.verCarrito;
    console.log(this.matBadge);
    console.log(this.TiendaService.miLista.length);
  }
}
