import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/models/editorial.model';
import { EditorialesService } from 'src/app/services/editoriales.service';

@Component({
  selector: 'app-agregar-editorial',
  templateUrl: './agregar-editorial.component.html',
  styleUrls: ['./agregar-editorial.component.css']
})
export class AgregarEditorialComponent {

  datosEditorial = new FormGroup({
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    fechaAlta: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    prefijo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    estado: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })
  constructor(private EditorialesService: EditorialesService, private router: Router) {

  }

  get nombre() {
    return this.datosEditorial.get('nombre');
  }
  get fechaAlta() {
    return this.datosEditorial.get('fechaAlta');
  }
  get prefijo() {
    return this.datosEditorial.get('prefijo');
  }
  get estado() {
    return this.datosEditorial.get('estado');
  }

  agregarEditorial() {
    console.log(this.datosEditorial.value);
    const nuevaEditorial: Editorial = {
      nombre: this.datosEditorial.value.nombre,
      fechaAlta: this.datosEditorial.value.fechaAlta,
      prefijo: this.datosEditorial.value.prefijo,
      estado: this.datosEditorial.value.estado
    }
    this.EditorialesService.agregarEditorial(nuevaEditorial);
    this.router.navigate(['admin/editoriales']);
  }
}
