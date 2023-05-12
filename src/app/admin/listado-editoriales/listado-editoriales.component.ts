import { Component } from '@angular/core';
import { Editorial } from 'src/app/models/editorial.model';
import { EditorialesService } from 'src/app/services/editoriales.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './listado-editoriales.component.html',
  styleUrls: ['./listado-editoriales.component.css']
})
export class ListadoEditorialesComponent {
  
  editoriales: Editorial[];

  constructor(private EditorialesServices: EditorialesService){
    this.editoriales = this.EditorialesServices.editoriales;
  }
}
