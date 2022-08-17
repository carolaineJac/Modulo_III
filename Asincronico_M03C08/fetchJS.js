//generar cards de perros usando la api de perritos

/* <div class="card" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Raza</h5>
                      <!-- <a href="#" class="btn btn-primary">Cambiar Imagen</a> -->
                      <button class="btn btn-primary">Cambiar Imagen</button>
                    </div>
                </div> */
function cargarcard(textoTitulo,urlFoto){
    //CREAR ELEMENTOS
    let contenedor=document.createElement("div");
    let card=document.createElement("div");
    let imagen=document.createElement("img");
    let cardBody=document.createElement("div");
    let titulo=document.createElement("h5");
    let boton=document.createElement("button");
    //AGRAGRA ELEMENTOS
    cardBody.appendChild(titulo);
    cardBody.appendChild(boton);
    card.appendChild(imagen);
    card.appendChild(cardBody);
    contenedor.appendChild(card);
    //CREAR ATRIBUTOS
    contenedor.className="col-2";
    card.className="card mx-auto";
    card.style="width:12rem;"
    imagen.className="card-img-top foto";
    imagen.setAttribute("src",urlFoto);
    cardBody.className="crad-body mx-auto";
    titulo.className="card-title text-center";
    titulo.innerText=textoTitulo;
    boton.className="btn btn-primary";
    boton.innerText="Cambiar Imagen";
    boton.addEventListener("click",async function(){
        let nuevaUrlFoto=await cargarFotoPerro(titulo.innerText);
        imagen.setAttribute("src",nuevaUrlFoto);
    });
    return contenedor;

}

//cargar la foto del perro
async function cargarFotoPerro(raza){
    let url = "https://dog.ceo/api/breed/"+raza+"/images/random";
    let respuesta = await fetch(url); 
    let datos=await respuesta.json();
    return datos.message;
}
//------------------------
async function cargarPerros(){
    let listaRazas=await fetch("https://dog.ceo/api/breeds/list/all");
    let datos = await listaRazas.json();
    let contenedor=document.querySelector("#contenedor");
    for(r in datos.message){
        console.log(r);
        let urlFoto=await cargarFotoPerro(r);
        let nuevocard=cargarcard(r,urlFoto);
        contenedor.appendChild(nuevocard);

    }
}

cargarPerros();