import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra.model';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './listado-compras.component.html',
  styleUrls: ['./listado-compras.component.css']
})
export class ListadoComprasComponent implements OnInit{

  compras: Compra[] = []


  constructor(private comprasService: ComprasService){}

  ngOnInit(): void{
    this.comprasService.getCompras().subscribe(
      compras => {
        this.compras = compras;
      }
    )
  }


}
