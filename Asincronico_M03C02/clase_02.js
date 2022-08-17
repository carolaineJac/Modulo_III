//TRABAJO CON ARREGLOS
let plantas=["ruda","ortiga","silantro","oregano"];
//5 alternativa para eliminar el silantro sin conocer su indice
console.table(plantas);
var plantas2=[];
for(i=0;i<plantas.length;i++){
    if(plantas[i]!="silantro"){
        plantas2.push(plantas[i]);
    }
}
console.table(plantas2);
//por funcion
function eliminaElemento(arreglo,elemento){
    let arreglo2=[];
    for(i=0;i<arreglo.length;i++){
        if(arreglo[i]!=elemento){
            arreglo2.push(arreglo[i]);
        }
    }
    return arreglo2;
}
//utilizando la funcion filter
var numeros=[1,2,3,4,5,6,,7,8,9];
console.log(numeros);
var numeros2=numeros.filter(function(e){
    return e!=3;
});
console.log(numeros2);
var numeros3=numeros.filter(function (n){
    return n>3;
});
console.log(numeros3);

//devolver los numeros pares
var numeros4=numeros.filter(function (n){
    return n%2==0;
});
console.log(numeros4);

//lo mismo pero mas corto

var numeros5=numeros.filter(n=>n%2==0);
console.log(numeros5);

//eliminar las plantas que se llame perejil
//eliminar las plantas que empiecen con p
//eliminar las plantas que terminen con o

let plantas00=["ruda","ortiga","silantro","oregano","perejil","tomate"];
var planta001=plantas00.filter(n=>n!="perejil");
console.log(plantas00);
console.log(planta001);

var planta002=plantas00.filter(n=>n[0]!="p");
console.log(plantas00);
console.log(planta002);

var planta003=plantas00.filter(n=>n[n.length-1]!="o");
console.log(plantas00);
console.log(planta003);


//dates
var fecha=new Date();
console.log(fecha);
var hoy=new Date(2022,10);
console.log(hoy);
//var otrafecha=new date

// var anioNAc=prompt("Ingrese su año de nacimeinto");
// var edad= fecha.getFullYear()-anioNAc;
// alert("su edad es:  "+edad);

//otras funciones

console.log("---------------------------------");
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.toDateString());
console.log(fecha.toTimeString());

////------------------------------------------------------------------------
// crear una clase llamada figura geometrica con todos  los lados iguales
//propiedades :numero de lados
//largo del lado
//funcion perimetro
class figGemetrica{
    constructor(numlado,lado){
        this.numlado=numlado;
        this.lado=lado;
    }
    perimetro= function (){
        return this.numlado*this.lado;
    }
}
var fig1=new figGemetrica(4,25);
console.log("el perimetro de la figura es:"+fig1.perimetro())

//derivar y heredar,generar triangulo y cuadrado
//donde se defina el numero de ladosy se agregue la funcion area
class Cuadrado extends figGemetrica{
    constructor(medida){
        super(4,medida);
    }
    area=function(){
        return this.medida*this.medida;
    }
}


class triangulo extends figGemetrica{
    constructor(lado){
        super(3,lado);
    }
    area=function(){
        let h=Math.sqrt(Math.pow(this.lado,2)-Math.pow(this.lado/2,2));
        return (h*this.lado)/2;
    }
}

var cuadrado=new Cuadrado(3);