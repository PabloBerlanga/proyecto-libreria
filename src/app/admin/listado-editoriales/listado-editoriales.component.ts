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
    this.EditorialesServices.getEditoriales().subscribe(
      editoriales => {
        this.editoriales = editoriales;
      }
    )
  }

  borrarEditorial(editorial:Editorial){

    if(window.confirm("¿Estas seguro de que quieres borrar esta editorial?")){
      this.EditorialesServices.borrarEditorial(editorial)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }

  }

}
