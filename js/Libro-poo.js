//FUNCIONA
var libro = { //si "libro" lo pongo en mayuscula no funciona

    //Propiedades del objeto de la variable (Tipos de objetos)
    titulo : "La carta esférica",
    autor : "Arturo Pérez Reverte",
    tamanyo : 592, 
    formato : "de bolsillo",
    tapa : "tapa blanda",//En clase dijo que como finalizabamos no se ponia coma "," sin embargo como vamos a por un metodo se la ponemos (no ha finalizado)
    genero : "novela historica" ,

//Una function dentro de un objeto es un metodo.
    detalles : function () {
    console.log(` El libro ${this.titulo} de mi autor favorito ${this.autor} consta de ${this.tamanyo} páginas en un formato ${this.formato} con ${this.tapa} y su genero es ${this.genero} .`);   
     
    }
};
//no se por qué acabo en ;
//comprobar con --  libro.detalles();

//FUNCIONA