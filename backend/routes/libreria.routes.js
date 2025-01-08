var express=require('express');
var router=express.Router();
var libroController=require('../controllers/libro.controller')
var multiparty=require('connect-multiparty'); // para cargar archivos externnos
var multipartyMiddleware=multiparty({uploadDir: './uploads'});
//pagina de inicio
router.get('/inicio',libroController.inicio);
//ver libros
router.get('/libros',libroController.getLibros);
//guardar libro
//ver un libro
// actualizar un libro
//eliminar un libro
//subir imagen 
// recuperar imagen
module.exports=router;