var Libro=require('../models/libro')
var controller={
    inicio: function (req,res) {
        return res.status(200).send({message:"<h1>Hola2</h1>"});
    },
    getLibros:async function(req,res){
      
      try {
        const libros=await Libro.find({}).sort();
        if(libros.lenght===0){
          return res.status(404).send({message:'No hay libros'});
        }
      return res.status(200).send({libros});  
      } catch (error) {
        return res.status(500).send({message: 'Error al recuperar los datos'});
      }
    }
}
module.exports=controller;