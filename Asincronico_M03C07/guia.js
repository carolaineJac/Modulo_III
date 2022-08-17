async function perrosApi(){
    let respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
    let datos = await respuesta.json();
    console.log(datos);
    console.log("---------------------------------------------------------");
    
}
perrosApi();