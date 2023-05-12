export interface Libro{
    id?: string;
    titulo: string;
    autor: string;
    precio: number;
    fechaSalida: string;
    editorial: string;
    cantidad: number;
    cantidadCarrito:number;


   /* constructor(titulo:string, autor:string, precio:number, fecha_salida:string, editorial:string, cantidad:number){
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.fecha_salida = fecha_salida;
        this.editorial = editorial;
        this.cantidad = cantidad;
    }*/

}