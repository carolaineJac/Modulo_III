var email=document.querySelector("#email");
var pass=document.querySelector("#pass");
var boton=document.querySelector("#boton");
var result=document.querySelector("#result");
var i=0;

//creacion de lista de objetos
class Usuario{
    constructor(email,pass){
        this.email=email;
        this.pass=pass;
    }
}
var listaUsuarios=[];
function agregar(){
    listaUsuarios.push(new Usuario(email.value,pass.value));
    console.log(listaUsuarios[i]);
    result.innerHTML=result.innerHTML+"<h4>"+listaUsuarios[i].email+":"+listaUsuarios[i].pass+"</h4><br>";
    i++;
    email.value="";
    pass.value="";
}

boton.addEventListener("click", agregar);