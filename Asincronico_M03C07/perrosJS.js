//https://dog.ceo/api/breeds/list/all

async function BuscarRazas(){
    //consultamos la api y obtenemos la respuesta
    let respuesta = await fetch("https://dog.ceo/api/breeds/list/all");
    //console.log(respuesta);
    //quitar l a basura para obtener lo que necesitamos
    let datos = await respuesta.json();
    console.log(datos);
    //obtener el html para insertae liosta de razas de perros
    let lista = document.querySelector("ul");
    //recorrr las propiedades dfel objeto message
    for(r in datos.message){
        //console.log(r);
        let elemento = document.createElement("li");
        elemento.innerText=r;
        //agragar comportamiento
        elemento.addEventListener("click",async function(){
            let foto = document.querySelector("img");
            //console.log(this.innerTxt);
            let urlFoto = await buscarImgPorRaza(this.innerText);
            foto.setAttribute("src",urlFoto);
        })
        lista.appendChild(elemento);

    }
}
//otra funcion 
async function buscarImgPorRaza(raza){
    let url = "https://dog.ceo/api/breed/"+raza+"/images/random";

    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    return datos.message;
}
BuscarRazas();
console.log(buscarImgPorRaza("terrier"));
//ejercicio 8 crear un albun de fotos con bostrap y cards con las razas de perros y las imagenes