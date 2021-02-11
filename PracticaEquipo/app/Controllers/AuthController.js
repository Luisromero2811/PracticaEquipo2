'use strict'
//const User = use('App/Models/User')
//const Database = use ("Database");
class AuthController {
    async Login ({request, response, auth})
    {
        //Campos requeridos                     //Atrapar los datos
        const {email, password} = request.only(['email', 'password'])
        //Generar el token de Usuario
        const token = await auth.attempt(email, password)
        return response.ok(token)
    }
}

module.exports = AuthController
//Await, funcion asincrona