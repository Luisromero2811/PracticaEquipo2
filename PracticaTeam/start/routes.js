'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Ruta para loguear
Route.post('/Login', 'AuthController.Login')
//Ruta para guardar user
//Metodo resource genera todas los verbos sin tener que especificar si es UPDATE, DELETE, GET O POST
 Route.resource('/Registro', 'UserController')
            .apiOnly()
            .validator(new Map([
                [['users.store'],['RegistroUser']]
              ])) 
//CRUD Usuarios
Route.post('/Registraruser', 'CrudPersonaController.Insertar')
Route.put('Actualizaruser/:id', 'CrudPersonaController.Actualizar')
Route.delete('Eliminaruser/:id', 'CrudPersonaController.Eliminar')
//Muestra Usuario con comentarios
Route.get('User/:id/comentarios','CrudPersonaController.Mostrar').middleware('auth')
//Eliminar comentarios
Route.delete('Eliminarcomments/:id','ComentarioController.EliminarComments')
//Muestra Usuario con sus productos
Route.get('Usuario/:id/comentarios','CrudPersonaController.Mostraruser').middleware('auth')
//CRUD Articulos
//Mostrar Articulos
Route.get('Productos/:id?','ProductoController.show')
Route.post('Registrarprod', 'ProductoController.Insertar').middleware('auth')
Route.put('Actualizarprod/:id', 'ProductoController.Actualizar')
//Esta eliminando el producto que aún no esta referenciado
Route.delete('Eliminarprod/:id', 'ComentarioController.Eliminar')
//Comentarios
Route.post('Insertarcoment/:producto', 'ComentarioController.Guardar').middleware('auth')
Route.get('Producto/:id/comentarios','ProductoController.Mostrar')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
//3 Rutas, Muestre productos (todos o por parametros), eliminar el comentario, que usuario hizo el producto