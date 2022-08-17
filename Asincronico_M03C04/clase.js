class Gato{
    constructor(nombre, raza){
        this.nombre=nombre;
        this.raza=raza;
    }
}
let gato1=new Gato("neko","angora");
let gato2=new Gato("cat","egipcio");

let gatoJson=JSON.stringify(gato1);

console.log(gato1);
console.log(gatoJson);

let gatoObj=JSON.parse(gatoJson);
console.log(gatoObj);

let arregloGatos=[gato1,gato2];
let arregloJSON=JSON.stringify(arregloGatos);
console.log(arregloGatos);
console.log(arregloJSON);

//--------------------------------------------
console.log("---------------------------------------------------------------");
$.getJSON("https://pokeapi.co/api/v2/pokemon/25",function(data){
    let pokemon =data;
    console.log(pokemon);
    //mostrar en nombre numero tipos foto(direccion)
    console.log("nombre del pokemon"+pokemon.name);
    console.log("El numero de pokemon: "+pokemon.id);
    for (let i = 0; i < pokemon.types.length; i++) {
        console.log("Los tipos de pokemon: "+pokemon.types[i].type.name);        
    }
    console.log("foto: "+pokemon.sprites.front_default);
});
console.log("---------------------------------------------------------------");

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
function(data) {
 console.log(data)
});

var imagen=document.querySelector("img");
var boton=document.querySelector("#boton");
boton.addEventListener("click",function(){
    $.getJSON("https://dog.ceo/api/breeds/image/random",function(data){
    let URLImagen=data.message;
    imagen.setAttribute("src",URLImagen);
});
});

//crear una funcion que elija un nuemrop entre 1 y 800
//usar esta funcion para buscar un pokemon al azar (por numero)
//cuando se cargue poner la infrmacionen el html oncluyendo la foto
