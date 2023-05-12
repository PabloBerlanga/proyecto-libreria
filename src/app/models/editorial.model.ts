export class Editorial{
    nombre: string;
    fecha_baja?: string;
    fecha_alta: string;
    prefijo_editorial:number;
    activo: string;

    constructor(nombre:string, fecha_alta:string, prefijo_editorial:number, activo:string, fecha_baja?:string){
        this.nombre = nombre;
        this.fecha_baja = fecha_baja;
        this.fecha_alta = fecha_alta;
        this.prefijo_editorial = prefijo_editorial;
        this.activo = activo;
    }
}