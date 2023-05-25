import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ComprasService } from 'src/app/services/compras.service';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {

  miCarrito:any;
  inputTipo:String;
  total: number;
  completed = false;


  datosPago = new FormGroup({

    calle: new FormControl('', Validators.required),
    numContacto: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("^[0-9]*$")]),
    poblacion: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    CP: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^[0-9]*$")]),
    formaPago: new FormControl('', Validators.required),
    numeroTarjeta: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(18), Validators.pattern("^[0-9]*$")]),
    fechaExpiracion: new FormControl('', Validators.required),
    CVV: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern("^[0-9]*$")]),
  })


  constructor(private loginService: LoginService, private comprasService: ComprasService, private librosServices: LibrosService){
    this.listarCarrito()
    const total = this.totalCarrito()
    this.total = total;

  }

  get formaPago(){
    return this.datosPago.controls['formaPago'];
  }

  get calle(){
    return this.datosPago.controls['calle'];
  }

  get numContacto(){
    return this.datosPago.controls['numContacto'];
  }

  get poblacion(){
    return this.datosPago.controls['poblacion'];
  }
  get provincia(){
    return this.datosPago.controls['provincia'];
  }

  get CP(){
    return this.datosPago.controls['CP'];
  }

  get numeroTarjeta(){
    return this.datosPago.controls['numeroTarjeta'];
  }

  get fechaExpiracion(){
    return this.datosPago.controls['fechaExpiracion'];
  }

  get CVV(){
    return this.datosPago.controls['CVV'];
  }


  completarPaso(){
    this.completed = true
  }


  totalCarrito(){
    const total = this.miCarrito.reduce(
      function (acc: number, libro: { cantidadCarrito: number; precio: number; })
      {return acc + (libro.cantidadCarrito * libro.precio);}
      ,0)
    return total;
  }


  tramitarCompra(){
    //console.log(this.loginService.getUser());
    const nuevaCompra:any = {
      user: this.loginService.getUser(),
      calle: this.datosPago.value.calle,
      numContacto: this.datosPago.value.numContacto,
      poblacion: this.datosPago.value.poblacion,
      provincia: this.datosPago.value.provincia,
      CP: this.datosPago.value.CP,
      formaPago: this.datosPago.value.formaPago,
      total: this.totalCarrito(),
      libros: this.miCarrito
    }

    this.miCarrito.forEach((producto: { [x: string]: any; }) => {
      const idLibro = producto["id"];
      const nuevaCantidadLibro = {
        cantidad: producto["cantidad"] - producto["cantidadCarrito"]
      }
      this.librosServices.modificarLibro(idLibro,nuevaCantidadLibro)
    });

    this.comprasService.comprarProductos(nuevaCompra)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  listarCarrito(){

    let carrito = JSON.parse(localStorage.getItem("Carrito") || '{}');
    this.miCarrito = carrito
    console.log(this.miCarrito);
  }

}
