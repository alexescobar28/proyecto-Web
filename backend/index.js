var mongoose = require('mongoose');
var port = '3600';
mongoose.Promise = global.Promise; // Uso correcto de la propiedad
var app=require('./app');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/libreria')
.then(() =>{
  console.log('Conectado a la base de datos');
  app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
  })
} )
.catch(err => console.error('Error al conectar a la base de datos:', err));


