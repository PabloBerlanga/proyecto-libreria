import { Injectable } from '@angular/core';
import { Editorial } from '../models/editorial.model';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {

  editoriales: Editorial[] = [
    new Editorial("Alamut","10/05/2023",154726,"Inactivo","25/04/2023"),
    new Editorial("Anaya","14/04/2023",1574891,"Activo")
  ]
  
  agregarEditorial(nuevaEditorial: Editorial){
    this.editoriales.push(nuevaEditorial);
  }


}
