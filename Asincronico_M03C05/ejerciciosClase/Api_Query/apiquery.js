//ejercicios
//1.- Crear una consulta API para obtener el JSON de respuesta cuando consulte por una “Random
//Image”. Envíe los datos a pantallas para analizar el objeto devuelto por la API

//2.- la propiedad que contiene la imagen, cárguela en un nodo (etiqueta) html, mediante la
//modificación de su propiedad src.

//3.- agregue un botón para que cuando se haga click, cargue una nueva imagen.

var imagen=document.querySelector("img");
var boton=document.querySelector("#boton");
boton.addEventListener("click",function(){
    $.getJSON("https://dog.ceo/api/breeds/image/random",function(data){
    let URLImagen=data.message;
    imagen.setAttribute("src",URLImagen);
    console.log(data);
});
});

//4.- Crear una consulta API para cargar los datos de todas las razas “List All Breeds”. Envíe el json a
//pantalla y analícelo.