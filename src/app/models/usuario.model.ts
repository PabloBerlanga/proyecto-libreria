export class Usuario{
    nombre:string;
    correo:string;
    user:string;
    password:string;
    admin:string;

    constructor(nombre: string,correo:string,user:string,password:string,admin:string){
        this.nombre = nombre;
        this.correo = correo;
        this.user = user;
        this.password = password;
        this.admin = admin;
    }


}