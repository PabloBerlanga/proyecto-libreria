import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/models/editorial.model';
import { EditorialesService } from 'src/app/services/editoriales.service';

@Component({
  selector: 'app-agregar-editorial',
  templateUrl: './agregar-editorial.component.html',
  styleUrls: ['./agregar-editorial.component.css']
})
export class AgregarEditorialComponent {

  editoriales: Editorial[];
  nombreEditorial:string;
  fechaAltaEditorial:string;
  preEditorial:number;
  estadoEditorial:string;
  fechaBajaEditorial:string = "";

  constructor(private EditorialesService: EditorialesService, private router:Router){
    this.editoriales = this.EditorialesService.editoriales
  }


  crearEditorial(){
    let nuevaEditorial = new Editorial(this.nombreEditorial,this.fechaAltaEditorial,this.preEditorial,this.estadoEditorial,this.fechaBajaEditorial);
    this.EditorialesService.agregarEditorial(nuevaEditorial);
    this.router.navigate(['admin/editoriales']);
    console.log(nuevaEditorial);
  }
}
