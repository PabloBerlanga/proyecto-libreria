import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Editorial } from 'src/app/models/editorial.model';
import { Libro } from 'src/app/models/libro.model';
import { EditorialesService } from 'src/app/services/editoriales.service';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})
export class ModificarLibroComponent {

  idLibro: string | null;
  LibroMod: any;
  editoriales: Editorial[];

  constructor(private activatedRoute: ActivatedRoute, private LibrosService: LibrosService, private editorialServices: EditorialesService, private router: Router){
    this.idLibro = this.activatedRoute.snapshot.paramMap.get('id');

    this.editorialServices.getEditoriales().subscribe(
      editoriales => {
        this.editoriales = editoriales;
      }
    )

    this.getLibro()

  }

  datosLibro = new FormGroup({
    img: new FormControl(),
    titulo: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    precio: new FormControl('',[Validators.required]),
    fechaSalida: new FormControl('', [Validators.required]),
    editorial: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required]),
  })
  
  get titulo(){
    return this.datosLibro.get('titulo');
  }
  get autor(){
    return this.datosLibro.get('autor');
  }
  get precio(){
    return this.datosLibro.get('precio');
  }
  get fechaSalida(){
    return this.datosLibro.get('fechaSalida');
  }
  get editorial(){
    return this.datosLibro.get('editorial');
  }
  get cantidad(){
    return this.datosLibro.get('cantidad');
  }

  getLibro(){
    this.LibrosService.getLibro(this.idLibro)
    .then(result => {
      this.LibroMod = result;
      console.log(this.LibroMod.titulo);
      this.datosLibro.setValue({
        img: this.LibroMod.img,
        titulo: this.LibroMod.titulo,
        autor: this.LibroMod.autor,
        precio: this.LibroMod.precio,
        fechaSalida: this.LibroMod.fechaSalida,
        editorial: this.LibroMod.editorial,
        cantidad: this.LibroMod.cantidad,
      })
    })
  }


  update(){
    const datosLibroC = { //Guardo la URL de la imagen para acceder mas adelante
      titulo: this.datosLibro.value.titulo,
      autor: this.datosLibro.value.autor,
      precio: this.datosLibro.value.precio,
      fechaSalida: this.datosLibro.value.fechaSalida,
      editorial: this.datosLibro.value.editorial,
      cantidad: this.datosLibro.value.cantidad,
    }
    this.LibrosService.modificarLibro(this.idLibro,datosLibroC)
    this.router.navigate(['admin/libros']);
    alert("Libro modificado con exito")
  }
  

}
