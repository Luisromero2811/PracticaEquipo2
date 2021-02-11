'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comentario extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }
    producto () {
        return this.hasOne('App/Models/Producto')
    }
}

module.exports = Comentario
