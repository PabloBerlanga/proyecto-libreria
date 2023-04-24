export class Libro{
    titulo: string  = '';
    autor: string = '';
    fecha_salida: string = '';
    editorial: string = '';
    cantidad: number = 0;


    constructor(titulo:string, autor:string, fecha_salida:string, editorial:string, cantidad:number){
        this.titulo = titulo;
        this.autor = autor;
        this.fecha_salida = fecha_salida;
        this.editorial = editorial;
        this.cantidad = cantidad;
    }

}