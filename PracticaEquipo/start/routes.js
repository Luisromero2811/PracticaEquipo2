'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
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
//Metodo resource genera todas las rutas
Route.resource('/Registro', 'UsuarioController')
            .apiOnly()
            .validator(new Map([
                [['users.store'],['RegistroUser']]
            ]))

//Especificar validador para cada ruta
Route.on('/').render('welcome')
