'use strict'
const coments= use('App/Models/Comentario')
const products= use('App/Models/Producto')
class ComentarioController {
    async EliminarComments({request, response, params}){
        //const {id} = params
           const comentario = await coments.find(params.id)
           //return params.id
           await comentario.delete()
               return response.json({
                   "Se ha eliminado satisfactoriamente el comentario:" : comentario
               })
       }
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
    async Eliminar({response,params}){
        const producto= await products.find(params.id)
        if(producto){
            const comentario= await coments
            .query()
            .where('producto_id','=',params.id)
            .delete()
            await producto.delete()
            return response.json({"Se ha eliminado correctamente el producto":producto})
        }else{
            return response.json({"message":"No se ha encontrado un producto"})
        }
        }
}
module.exports = ComentarioController
//const { id } = params
//const product = await products.find(id)
        