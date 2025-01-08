var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var LibroSchema=Schema({
    nombre:String,
    autor:String,
    edicion:String,
    anio:Number,
    precio:Number,
    imagen:String // se guarda la direccion url de la imagen
});
module.exports=mongoose.model('Libro',LibroSchema); // genera un esquema que se va a visualizar y como .model le pone en minusculas y en plural por eso ponemos Libro ==> libros en bd
