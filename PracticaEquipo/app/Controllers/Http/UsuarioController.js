'use strict'
const User = use('App/Models/User')
class UsuarioController {
    async store ({request, response})
    {
        //Obtener datos que llegaran del cliente (Insomnia)
        const userData = request.only(['email','password'])
        //Crear el usuario nuevo
        const user = await User.create(userData)
        //Retorna en caso de que el usuario se ha creado
        return response.created({
            status: true,
            data: user
})
    }
}

module.exports = UsuarioController
