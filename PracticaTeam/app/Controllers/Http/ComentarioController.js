'use strict'
const coments= use('App/Models/Comentario')
class ComentarioController {
    async Guardar({response, request,params,auth}){
        const data = request.only(['Comentario'])   
        const comentario = new coments()
        comentario.Comentario=data.Comentario
        comentario.user_id=auth.user.id
        comentario.producto_id=params.producto
        await comentario.save()
        return response.json({
            "Se ha agregado un comentario nuevo:" : comentario})
    }
}

module.exports = ComentarioController
/* const data = request.only(['Nombre','Caducidad'])
        const producto=await products.find(params.id)
        producto.Nombre=data.Nombre
        producto.Caducidad=data.Caducidad
        await producto.save()
        return response.json({"producto":producto,"params":params})
 */