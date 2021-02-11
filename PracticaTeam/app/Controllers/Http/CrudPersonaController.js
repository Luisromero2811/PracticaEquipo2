'use strict'
const User=use('App/Models/User')
//
class CrudPersonaController {
    //CRUD para usuarios
    async Insertar ({request,response})
{
    const rules = {
        Nombre: 'required',
        email: 'required|email',
        password: 'required'
      }
        const userData = request.only(['Nombre','email', 'password'])    
        const users = await User.create(userData)
    return response.json({
        "Se ha agregado un nuevo usuario con sus datos:" : users
    })      
      }
      //Update
      async Actualizar ({request, response, params})
{
    const users=await User.find(params.id)
    users.merge(request.post())
    await users.save()
    response.json({
        "Se han actualizado los datos correctamente":users
    })
}
//Eliminar
async Eliminar ({request, response, params})
{
const { id } = params
const users = await User.find(id)
await users.delete()
return response.json({
    Usuario: "Eliminado con exito"
})
}
    //Mostrar usuario con sus comentarios
    async Mostrar({response, auth})
    {
        const user= await User.find(auth.user.id)
        //const comentarios= await producto.comentario().fetch()
        const comentarios= await user.comentario().fetch()
        return  response.json({"Comentarios":comentarios,"Usuario":user.Nombre})
    } 
    //Mostrar usuario con su producto
    async Mostraruser({response, auth})
    {
        const user= await User.find(auth.user.id)
        const product= await user.producto().fetch()
        //const product= await products.find(params.id)
        return  response.json({"Productos":product,"Usuario":user.Nombre})
    }  
}



module.exports = CrudPersonaController
