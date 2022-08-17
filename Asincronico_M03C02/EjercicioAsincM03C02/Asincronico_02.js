var fecha=new Date();
var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
//console.log(dias[fecha.getDay()-1]);
var diaSemana=dias[fecha.getDay()-1];
alert("El dia de hoy es : "+diaSemana);