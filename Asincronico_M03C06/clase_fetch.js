//--------CALLBACK
function saludar(nombre){
    console.log("hola "+nombre);
}

function despedir(nombre){
    console.log("Chauu"+nombre);
}

function ejecturar(f){
    let persona="Pedro";
    f(persona);
}
ejecturar(saludar);
ejecturar(despedir);

//----PROMESAS----------//

// function suma(x,y){
//     var promesa= new Promise(function(resolve,reject){
//         if(x==undefine || y==undefine){
//             reject("error falta un numero");
//         }else{
//             resolve(x+y);
//         }
//     })
// }

// suma(10,20).then(function(data){
//     console.log(data);
// }).catch(function(e){
//     console.log(e);
// })

//-------fetch

// fetch("test.txt").then(function(data){
//     console.log(data);
//     data.text().then(function(data2){
//         console.log(data2);
//     })
// })
// //lo mismo pero abriviado
// fetch("test.txt").then(d=>d.text().then(t=>console.log(t))).catch(err=>console.log(err));

///haremos los mismo pero usando asinc awwait

async function leerDatos(){
    let dayos=await fetch("test.txt");
    console.log("async");
    console.log(dayos);
    let text2=await dayos.text();
    console.log(text2);
}

leerDatos();

///ejemplo leer desde api perrito 

async function leerDatos2(){
    let data = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log("leerdatos2");
    console.log(data);
    let datos = await data.json();
    console.log(datos); 
}
leerDatos2();

//lo mismo con un then

fetch("https://dog.ceo/api/breeds/image/random").then(function(data){
    console.log(data);
    data.json().then(function(datos){
        console.log(datos);
    })
})
//----------------------------
//pokemon https://pokeapi.co/api/v2/pokemon/151

async function obtenerPokemon(numero){
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+numero);
    let datos = await respuesta.json();
    console.log(datos);
}
obtenerPokemon(101);
//-------------------------------------------------------------

async function cienPokemon(){
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
    let datos = await respuesta.json();
    console.log(datos);
    console.log("---------------------------------------------------------");
    for(i=0;i<datos.results.length;i++){
        let texto = datos.results[i].name +":";
        let url = datos.results[i].url;
        //----------------------------
        let pokeRespuesta = await fetch(url);
        let pokeDatos = await pokeRespuesta.json();
        console.log(pokeDatos);
        //-------------------------
        let img= pokeDatos.front_dafault;
        //-----------------------------------
        for(j=0;j<pokeDatos.types.length;j++){
            texto += pokeDatos.types[j].type.name +":";
        }
    }
}
cienPokemon();

