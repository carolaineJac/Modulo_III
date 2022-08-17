//archivo de la clase 01
// var autoAlexis={
//     motor:"2.2",
//     puertas:5,
//     combustible:"diesel",
//     sonido:function(){
//         console.log("BRUM BRUM,");
//     }
// }

// console.log(auto.combustible);
// auto.sonido();
// var autoSandra={
//     modelo:"tp",
//     marca:"pegeut",
//     airbag:2,
//     combustible:"bencina",
//     sonido:function(){
//         console.log("brum brum");
//     }
// }
// var autoGuillermo={
//     modelo:"tp",
//     marca:"pegeut",
//     airbag:2,
//     combustible:"bencina",
//     sonido:function(){
//         console.log("brum brum");
//     }
// }

// var autoElectrico={
//     modelo:"tpzzelectrivco1",
//     marca:"tesla",
//     airbag:2,
//     combustible:"electricidad",
//     sonido:function(){
//         console.log("fiz fiz");
//     }
// }

class Auto{
    constructor(marca,modelo,anio){
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
    }

}
var auto1=new Auto("audy","TT",2013);
let auto2=new Auto("mazda","3",2020);
let auto3=new Auto("mitsubishi","montero",202);
console.log(auto1);
console.log(auto2);
console.log(auto3);
//ejercicio crear una clase que defina un rectangulo
//crear una clase que defina un usuario
class rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;        
    }
}
class Usuario{
    constructor(nombre, pass){
        this.nombre=nombre;
        this.pass=pass;        
    }
}
var usuario1=new Usuario("juanito","123");
var usuario2=new Usuario("jose","987");
var usuario3=new Usuario("marcos","4546");
console.table(usuario1);
console.log("El nombre del usuario:"+usuario1.nombre);
console.log("El nombre del usuario2:"+usuario2["nombre"]);

//agregar una propiedad a un ususario
usuario1.activo=false;
console.log(usuario1);
console.log(usuario2);
//llamar a una propiedad que no est definioda
console.log(usuario1.login);
//Eliminar propiedades de u nobjeto
delete usuario1.activo;
console.log(usuario1);
//


//REDEFINIR LA CLASE RECTANGULO PARA QUE ME ENTRGUE EL AREA Y EL PERIMETRO

class Rectangulo2{
    constructor(alto,ancho){
        this.ancho=ancho;
        this.alto=alto;
    }
    area=function (){
        return this.ancho*this.alto;
    }
    primetro=function (){
        return 2(this.ancho*this,alto);
    }
}
let rec1 = new Rectangulo2(10,20);
console.log(rec1.area());
rec1.ancho=30;
console.log(rec1.area());

//crear un formulario de registro, y al lado o abajo crear una lista con los usuarios registrados
//cada vez que se registra un usuario(en el formulario), se debe crear el objeropára este agragarlo 
//a la lsita usurios

