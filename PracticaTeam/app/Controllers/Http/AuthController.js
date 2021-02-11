'use strict'

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
//Abraham con su registro puso nombre, email y password y nosotros solo pusimos el email, password, añadir el campo nombre y correr el seed
//JWT, ayuda para mandar en el header de Angular el token