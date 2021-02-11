'use strict'
const user = use('App/Models/User')
const { validate } = use('Validator')

class CrudController {
    async Insertar ({request,response})
    {
        const rules = {
            Correo: 'required|email',
            Edad: 'required'
          }
          const validation = await validate(request.all(), rules)
          if (validation.fails()) {
            return response.status(418).json({mensaje:"Datos no validos"})
          }else{
            const userData = request.only(['Nombre', 'Correo', 'Edad'])    
            const users = await user.create(userData)
        return response.json({
            "Se ha agregado un nuevo usuario con sus datos:" : users
        })      
          }
    }
    async Actualizar ({request, response, params})
    {
        const users=await user.find(params.id)
        users.merge(request.post())
        await users.save()
        response.json({
            "Se han actualizado los datos correctamente":users
        })
    }
    async Eliminar ({request, response, params})
    {
    const { id } = params
    const users = await user.find(id)
    await users.delete()
    return response.json({
        Usuario: "Eliminado con exito"
    })
    }
}


module.exports = CrudController
