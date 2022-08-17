
var boton=document.querySelector("#actualizar");
var h3chiste=document.querySelector("h3");

    
    boton.addEventListener("click",function(){
        $.getJSON("https://api.chucknorris.io/jokes/random",function(data){
            let datos =data;
            console.log(datos);
            
            h3chiste.textContent=datos.value;
            
            
        });
    });
