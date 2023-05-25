import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private LoginService: LoginService, private router: Router){}

  logOut(){
    this.LoginService.logOut()
    .then(response => this.router.navigate(['/login']))
    .catch(error => console.log(error));
  }
}
