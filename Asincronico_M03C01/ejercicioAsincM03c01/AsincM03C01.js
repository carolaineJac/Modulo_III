//creacion de la clase libro
class Libro{
    constructor(nombre,autor,editorial,genero){
        this.nombre=nombre;
        this.autor=autor;
        this.editorial=editorial;
        this.genero=genero;
    }
    mostrarLibro=function(){
        var mensaje="El titulo del libro es: "+this.nombre+", el autor : "+this.autor+", la editorial: "+this.editorial+" y el genero: "+this.genero;
        return mensaje;
    }
}
var libro1=new Libro("La iliada","Homero","Las joyas","Clasicos griegos");
var libro2=new Libro("El señor de los anilloa","Tolkien","Limara","Ciencia ficcion");
var libro3=new Libro("El Atomo","Einsten","monaco","Cientifico");
var libro4=new Libro("la relatividad","Einsten","artes","Cientifico");
//mostrar libros con el metodo de los objetos
console.log(libro1.mostrarLibro());
console.log(libro2.mostrarLibro());
console.log(libro3.mostrarLibro());
console.log(libro4.mostrarLibro());
//creacion del arreglo llamado libros
var libro=[libro1,libro2,libro3,libro4];
//creacion de la funcion filtrarPorAutor
function filtrarPorAutor(arreglo,autor){
    var result=[];
    console.log("El autor es: "+autor);
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i].autor);
        if(arreglo[i].autor==autor){
            console.log("entro al if");
            result.push(arreglo[i].nombre);
        }        
    }
    return result;
}
console.log(filtrarPorAutor(libro,"Einsten"));