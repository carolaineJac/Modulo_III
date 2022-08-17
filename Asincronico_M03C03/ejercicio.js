//1.- Crear tres objeto (sin clase) que represente un gato: debe tener las propiedades nombre, raza,
//tipo pelaje, sexo.
var gato1={nombre:"misifuz",raza:"felino",tipo_pelaje:"peludo",sexo:"macho"};
var gato2={nombre:"fuzi",raza:"cat",tipo_pelaje:"sin pelo",sexo:"macho"};
var gato3={nombre:"gini",raza:"felino",tipo_pelaje:"peludo",sexo:"hembra"};

//2.- crear la clase gato, con las mismas propiedades que el ejercicio anterior. A partir de este, crer
//tres nuevos objetos
class Gato{
    constructor(nombre,raza,tipo_pelaje,sexo){
        this.nombre=nombre;
        this.raza=raza;
        this.tipo_pelaje=tipo_pelaje;
        this.sexo=sexo;
    }
}

var gato11=new Gato("feliz","king","peludo","macho");
var gato22=new Gato("miu","box","peludo","macho");
var gato33=new Gato("tristan","goldie","muchopelo","macho");

//3.- Crear una clase para representar un televisor, con propiedades Tamaño, marca y modelo. Crear
//dos objetos a partir de esta clase
class Televisor{
    constructor(tamanio, marca,modelo){
        this.tamanio=tamanio;
        this.marca=marca;
        this.modelo=modelo;
    }
}
var tele1=new Televisor("22","sansgsun","bravia");
var tele2=new Televisor("42","RCA","FFRC");
var tele3=new Televisor("32","Toshiba","HYH87");
//4.- Crear una clase que represente un archivo, con propiedades nombre, tamaño y ruta. Crear un
//objeto a partir de esta clase.
class Archivo{
    constructor(nombre,tamanio,ruta){
        this.nombre=nombre;
        this.tamanio=tamanio;
        this.ruta=ruta;
    }
}

var archivo11=new Archivo("hola.jpg","22kbyte","C://documentos/hola.jpg");
var archivo22=new Archivo("saludo.pdf","100kbyte","C://documentos/saludo.pdf");
var archivo33=new Archivo("reporte.xls","100Mbyte","C://documentos/reporte.xls");

//5.-Crear una clase para representar una canción: con nombre, autor y duración.

class Cancion{
    constructor(nombre,autor,duracion){
        this.nombre=nombre;
        this.autor=autor;
        this.duracion=duracion;
    }
}

//6.- Crear una clase para representar un disco de música, debe contener: nombre del disco, autor,
//año y un arreglo con las canciones del disco (que usará objetos del tipo canción). Crear dos objetos
//a partir de esta clase

class Disco{
    constructor(nombre,autor,anio,canciones){
        this.nombre=nombre;
        this.autor=autor;
        this.anio=anio;
        this.canciones=canciones;
    }
}
var cancio11=new Cancion("sobreviviendo","illapu","3min");
var cancio22=new Cancion("angel para un final","bunker","4min");
var arregloCanciones=[];
arregloCanciones.push(cancio11);
arregloCanciones.push(cancio22);

var disco1=new Disco("mescaldos80","djpapo",arregloCanciones);
var disco2=new Disco("salsa2000","juan perez",arregloCanciones);

//7.- Crear una clase llamada playlist, la que contenga: nombre, género, un arreglo con una lista de
//canciones (del ejercicio 5). El arreglo al principio debe estar vacío.

class PlayList{
    constructor(nombre,genero,listaCanciones){
        this.nombre=nombre;
        this.genero=genero;
        this.listaCanciones=listaCanciones;
    }
}

var playlist11=new PlayList("listaguillermo","mesclados",arregloCanciones);

//8.- Agregar a la clase playlist una función “agregarCancion(canción)” que agregue canciones a la
//lista. Esta canción es un objeto del tipo canción definido en el ejercicio 6
class PlayList2{
    constructor(nombre,genero,listaCanciones){
        this.nombre=nombre;
        this.genero=genero;
        this.listaCanciones=listaCanciones;
    }
    agregarCancion=function(nuevaCancion){
        this.listaCanciones.push(nuevaCancion);
    }
}

var playlist66=new PlayList2("listaguillermo","mesclados",arregloCanciones);

//9.- Agregar a la clase playlist una funcionalidad para eliminar una canción por nombre
class PlayList3{
    constructor(nombre,genero,listaCanciones){
        this.nombre=nombre;
        this.genero=genero;
        this.listaCanciones=listaCanciones;
    }
    agregarCancion=function(nuevaCancion){
        this.listaCanciones.push(nuevaCancion);
    }
    eliminarCancion=function(cancionBorrar){
        this.listaCanciones(cancion=>cancion.nombre==cancionBorrar);
    }
}

var playlist55=new PlayList3("listaguillermo","mesclados",arregloCanciones);

//10.- Agregar una funcionalidad para eliminar varias canciones que tengan el mismo autor (se debe
//pasar el nombre del autor en el parámetro de la función).
class PlayList4{
    constructor(nombre,genero,listaCanciones){
        this.nombre=nombre;
        this.genero=genero;
        this.listaCanciones=listaCanciones;
    }
    agregarCancion=function(nuevaCancion){
        this.listaCanciones.push(nuevaCancion);
    }
    eliminarCancion=function(cancionBorrar){
        this.listaCanciones(cancion=>cancion.nombre==cancionBorrar);
    }
    eliminarxAutor=function(autorBorrar){
        this.listaCanciones(cancion=>cancion.autor==autorBorrar);
    }
}



//11.- crear a partir de esta clase, dos objetos. Agregar 10 canciones mediante la función.
var canciones111=[];
var canciones222=[];
var playlistnueva1=new PlayList4("listaguillermo","mesclados",canciones111);
var playlistnueva2=new PlayList4("list1","salsas",canciones222);

playlistnueva1.agregarCancion(new Cancion("te extraño","ricki martin","20min"));
console.log(playlistnueva1.listaCanciones);

//12.- crear una clase “Pelicula”, que contenga: nombre, año, director,género, reparto (arreglo).
//Agregar las funciones mostrarReparto (que muestre los actores en una tabla) y la función
//agregarFavoritos, para poner la propiedad “favorito” en true (inicialmente debe ser false). A partir
//de esta clase crear 3 objeto película.
class Pelicula{
    favorito=false;
    constructor(nombre,anio,director,genero,reparto){
        this.nombre=nombre;
        this.anio=anio;
        this.director=director;
        this.genero=genero;
        this.reparto=reparto;
    }
}

//13.- Crear una clase llamada punto, que debe tener un valor para X y otro para Y.


//14.- crear una clase lamada vector, que contendrá dos puntos y una función para calcular la
//distancia entre esos puntos (raíz de ((x2-x1)2+(y2-y1)2).