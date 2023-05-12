import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditorialesService } from 'src/app/services/editoriales.service';
import { LibrosService } from 'src/app/services/libros.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  numEditoriales:number;
  numLibros: number;
  numUsuarios: number;
  numCompras: number;
  
  constructor(private LibrosService:LibrosService, private UsuariosService:UsuariosService, private EditorialesService:EditorialesService,private router:Router){
    this.numEditoriales = this.EditorialesService.editoriales.length;
    //this.numLibros = this.LibrosService.libros.length;
    this.numUsuarios = this.UsuariosService.usuarios.length;
    this.numCompras = 0;
  }

  rutaLibros(){
    this.router.navigate(['admin/libros']);
  }

  rutaEditoriales(){
    this.router.navigate(['admin/editoriales']);
  }

  rutaUsuarios(){
    this.router.navigate(['admin/usuarios']);
  }

  rutaCompras(){
    this.router.navigate(['admin/compras']);
  }
}
