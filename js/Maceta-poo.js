//Tambien funciona
var maceta = {
    //Propiedades del objeto de la variable (Tipos de objetos)
    tamanyo : "mediano",
    geometria : "cuadrada",
    altura : "20", 
    color: "azul",//En clase dijo que como finalizabamos no se ponia coma "," sin embargo como vamos a por un metodo se la ponemos (no ha finalizado)
    

//Una function dentro de un objeto es un metodo.
    detalles : function () {
    console.log(` La maceta es ${this.geometria} y de tamaño ${this.tamanyo}, mide ${this.altura} cm de alto y es de un bonito color ${this.color} .`);   
     
    }
};

//No tocar - FUNCIONA