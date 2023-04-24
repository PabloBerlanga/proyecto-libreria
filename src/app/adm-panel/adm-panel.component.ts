import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-adm-panel',
  templateUrl: './adm-panel.component.html',
  styleUrls: ['./adm-panel.component.css']
})
export class AdmPanelComponent {

  constructor(private router:Router){}



    cerrarSesion(){
      this.router.navigate(['login']);
    }
}
