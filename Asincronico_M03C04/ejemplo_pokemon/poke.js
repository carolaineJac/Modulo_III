//crear una funcion que elija un nuemrop entre 1 y 800
//usar esta funcion para buscar un pokemon al azar (por numero)
//cuando se cargue poner la infrmacionen el html oncluyendo la foto

function numRandom(){
    return Math.floor( 1 + Math.random() * (800 - 1));
}
//console.log(numRandom())
var imagen=document.querySelector("img");
var boton=document.querySelector("#boton");
var h2nombre=document.querySelector("#nombre");
var h2tipo=document.querySelector("#Tipo");
boton.addEventListener("click",function(){
    let num1=numRandom();
    $.getJSON("https://pokeapi.co/api/v2/pokemon/"+num1,function(data){
        let pokemon =data;
        console.log(pokemon);
        //mostrar en nombre numero tipos foto(direccion)
        
        let tipos="";
        for (let i = 0; i < pokemon.types.length; i++) {
            tipos=tipos+pokemon.types[i].type.name+",";        
        }
        console.log("foto: "+pokemon.sprites.front_default);
        h2nombre.textContent=pokemon.name;
        h2tipo.textContent=tipos;
        imagen.setAttribute("src",pokemon.sprites.front_default);
    });
    
});