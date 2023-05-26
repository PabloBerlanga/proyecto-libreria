import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage'
import { Editorial } from 'src/app/models/editorial.model';
import { Libro } from 'src/app/models/libro.model';
import { EditorialesService } from 'src/app/services/editoriales.service';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent {

  libros: Libro[];
  editoriales: Editorial[];
  img:any;
  imgRef:any;
  imgURL:any;



  datosLibro = new FormGroup({
    img: new FormControl(),
    titulo: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    precio: new FormControl('',[Validators.required]),
    fechaSalida: new FormControl('', [Validators.required]),
    editorial: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required]),
  })

  constructor(private librosServicio: LibrosService, private editorialServices: EditorialesService, private router: Router, private storage:Storage) { }

  ngOnInit() {
    this.librosServicio.getLibros().subscribe(
      libros => {
        this.libros = libros;
      }
    )
    this.editorialServices.getEditoriales().subscribe(
      editoriales => {
        this.editoriales = editoriales;
      }
    )
  }

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

  imagenSubida($event:any){
    const imagen = $event.target.files[0];
    this.img = imagen
    //console.log(imagen);

    const imgRef = ref(this.storage, `imglibros/${imagen.name}`);
    //console.log(imgRef);
    this.imgRef = imgRef;

    this.subirImagen();

    
  }

  subirImagen(){
          //Sube la imagen al firebase storage
          uploadBytes(this.imgRef, this.img)
          .then( response => {
            console.log(response)
          })
          .catch(error => console.log(error));
  }


  agregar() {
    if(!this.img && !this.imgRef){
      
      console.log("No hay archivo para subir");

      console.log(this.datosLibro.value);

      const nuevoLibro: Libro = {
        img: "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-e95cf.appspot.com/o/imglibros%2FSinImagen.png?alt=media&token=6d033cef-b05c-44a1-88d2-fbece50396fc",
        titulo: this.datosLibro.value.titulo,
        autor: this.datosLibro.value.autor,
        precio: this.datosLibro.value.precio,
        fechaSalida: this.datosLibro.value.fechaSalida,
        editorial: this.datosLibro.value.editorial,
        cantidad: this.datosLibro.value.cantidad,
        cantidadCarrito: null
      }

      this.librosServicio.agregarLibro(nuevoLibro)
      .then(response => {
        console.log(response)
        this.router.navigate(['admin/libros'])
      })
      .catch(error => console.log(error))
    }
    else {

      //URL de la imagen para mostrar en la tienda
      getDownloadURL(this.imgRef)
      .then(response => {
        //console.log(response)
        const nuevoLibro: Libro = {
          img: response, //Guardo la URL de la imagen para acceder mas adelante
          titulo: this.datosLibro.value.titulo,
          autor: this.datosLibro.value.autor,
          precio: this.datosLibro.value.precio,
          fechaSalida: this.datosLibro.value.fechaSalida,
          editorial: this.datosLibro.value.editorial,
          cantidad: this.datosLibro.value.cantidad,
          cantidadCarrito: null
        }
        console.log(nuevoLibro);
        this.librosServicio.agregarLibro(nuevoLibro)
        this.router.navigate(['admin/libros'])
      })
      .catch(error => console.log(error))
        
    }
    }

}
