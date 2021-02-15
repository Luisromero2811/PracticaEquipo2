'use strict'
const products= use('App/Models/Producto')

class ProductoController {
    //Crud para articulos-productos
    async Insertar({request, response, auth}) {
        
        const rules ={
            Nombre: 'required',
            Caducidad: 'required',
        }             
        const data = request.only(['Nombre','Caducidad'])
        const producto=new products()
        producto.Nombre=data.Nombre
        producto.Caducidad=data.Caducidad
        producto.User_id=auth.user.id
        await producto.save()
        return response.json({
            "Se ha agregado un nuevo producto con sus datos:" : producto,
            "user":auth.user
        })
    }
    async Actualizar({request, response, params}){
        const data = request.only(['Nombre','Caducidad'])
        const producto=await products.find(params.id)
        producto.Nombre=data.Nombre
        producto.Caducidad=data.Caducidad
        await producto.save()
        return response.json({"producto":producto,"params":params})
    }
    async Eliminar({response, params}){
        const { id } = params
            const product = await products.find(id)
            await product.delete()
            return response.json({
                "Se ha eliminado satisfactoriamente el articulo:" : product
            })
    }
    async Mostrar({response,params}){
        //Mostrar Productos con todos sus comentarios
        const product= await products.find(params.id)
        //const comentarios= await producto.comentario().fetch()
        const comentarios= await product.comentario().fetch()
        return  response.json({"Comentarios":comentarios,"Producto":product.Nombre})

    }

    async show({request,params, response}){
        if (params.id == ''){
            const product= await products.all()
            return response.json({"Productos":product,"params":params.id})
        }else{
            const product= await products.find(params.id)
            return response.json({"Productos":product,"params":params.id})
        }
    }
}

module.exports = ProductoController
