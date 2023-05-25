import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/models/compra.model';
import { Editorial } from 'src/app/models/editorial.model';
import { Libro } from 'src/app/models/libro.model';
import { Usuario } from 'src/app/models/usuario.model';
import { ComprasService } from 'src/app/services/compras.service';
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
  
  constructor(private LibrosService:LibrosService, private UsuariosService:UsuariosService, private EditorialesService:EditorialesService,private ComprasService: ComprasService,private router:Router){
    this.LibrosService.getLibros().subscribe(
      libros => {
        let Libros: Libro[] = libros;
        this.numLibros = Libros.length
      }
    )

    this.UsuariosService.getUsuarios().subscribe(
      usuarios => {
        let Usuarios: Usuario[] = usuarios;
        this.numUsuarios = Usuarios.length
      }
    )

    this.EditorialesService.getEditoriales().subscribe(
      editoriales => {
        let Editoriales: Editorial[] = editoriales;
        this.numEditoriales = Editoriales.length
      }
    )

    this.ComprasService.getCompras().subscribe(
      compras => {
        let Compras: Compra[] = compras;
        this.numCompras = Compras.length
      }
    )
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
