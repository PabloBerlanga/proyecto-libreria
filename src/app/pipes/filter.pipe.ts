import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultado = [];
    for(const libro of value){
      if(libro.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultado.push(libro);
      };
    };
    return resultado
  }

}
