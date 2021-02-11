'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
   /*  user (){​​
        return this.hasOne('App/Models/User')
    }​​

    comentario (){​​
        return this.hasMany('App/Models/Comentario')
    }​​ */
    user (){
        return this.hasOne('App/Models/User')
    }
    comentario (){
        return this.hasMany('App/Models/Comentario')
    }

}
module.exports = Producto
