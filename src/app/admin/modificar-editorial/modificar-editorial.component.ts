import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Editorial } from 'src/app/models/editorial.model';
import { EditorialesService } from 'src/app/services/editoriales.service';

@Component({
  selector: 'app-modificar-editorial',
  templateUrl: './modificar-editorial.component.html',
  styleUrls: ['./modificar-editorial.component.css']
})
export class ModificarEditorialComponent {
  
  idEditorial: string | null;
  EditorialMod: any;
  editoriales: Editorial[];

  constructor(private activatedRoute: ActivatedRoute, private editorialServices: EditorialesService, private router:Router){
    this.idEditorial = this.activatedRoute.snapshot.paramMap.get('id');

    this.getEditorial()

  }

  datosEditorial = new FormGroup({
    nombre: new FormControl(''),
    prefijo: new FormControl(''),
    fechaAlta: new FormControl(''),
    estado: new FormControl(''),
  })
  
  get nombre(){
    return this.datosEditorial.get('nombre');
  }
  get prefijo(){
    return this.datosEditorial.get('prefijo');
  }
  get fechaAlta(){
    return this.datosEditorial.get('fechaAlta');
  }
  get estado(){
    return this.datosEditorial.get('estado');
  }

  getEditorial(){
    this.editorialServices.getEditorial(this.idEditorial)
    .then(result => {
      this.EditorialMod = result;
      console.log(this.EditorialMod.nombre);
      this.datosEditorial.setValue({
        nombre: this.EditorialMod.nombre,
        prefijo: this.EditorialMod.prefijo,
        fechaAlta: this.EditorialMod.fechaAlta,
        estado: this.EditorialMod.estado,
      })
    })
  }


  update(){
    const datosEditorialC = { //Guardo la URL de la imagen para acceder mas adelante
      nombre: this.datosEditorial.value.nombre,
      prefijo: this.datosEditorial.value.prefijo,
      fechaAlta: this.datosEditorial.value.fechaAlta,
      estado: this.datosEditorial.value.estado,
    }
    this.editorialServices.modificarLibro(this.idEditorial,datosEditorialC);
    this.router.navigate(['admin/editoriales']);
    alert("Editorial modificada con exito");
  }
}
