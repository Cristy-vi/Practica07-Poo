//FUNCIONA
var guitarras = {
    //Propiedades del objeto de la variable (Tipos de objetos)
    tipo : "acustica",
    modelo : "double cut",
    anyo : 1988, 
    cuerdas: 6,//En clase dijo que como finalizabamos no se ponia coma "," sin embargo como vamos a por un metodo se la ponemos (no ha finalizado)
   

//Una function dentro de un objeto es un metodo.
    detalles : function () {
    console.log(` Mi guitarra es ${this.tipo}  modelo "${this.modelo}", es del anyo ${this.anyo} y tiene ${this.cuerdas} cuerdas `);   
     
        //¿por que este no funciona¿ // console.log(`Mi guitarra favorita es de tipo `${this.tipo}:`,del modelo `${this.modelo} `, y es del año\\ ${this.anyo}`); 
        
    }
};

//FUNCIONA