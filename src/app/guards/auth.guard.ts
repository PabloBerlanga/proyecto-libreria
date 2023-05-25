import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private AuthGuard: Auth){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
    const user = await this.AuthGuard.currentUser;
    const isLogged = user ? true : false;
    if(!isLogged){
      alert('Tienes que iniciar sesion para poder entrar');
    }
    return isLogged;
  }
  
}
