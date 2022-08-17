//metodo bind
class Gato{
    constructor(nombre,raza){
        this.nombre=nombre;
        this.raza=raza;
    }    
    saludar = function(){
        console.log("hola com estas"+this.nombre);
    };
}
let gato1=new Gato("neko","marron");

let perro={
    nombre:"cachipin",
    raza:"terrier"
}
let funcionPrestada = gato1.saludar.bind(perro);
funcionPrestada();
//metodo call
gato1.saludar.call(perro);