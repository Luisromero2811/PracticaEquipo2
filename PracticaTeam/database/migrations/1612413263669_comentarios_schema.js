'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComentariosSchema extends Schema {
  up () {
    this.create('comentarios', (table) => {
      table.increments()
      table.string('Comentario',254)
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('producto_id').unsigned().references('id').inTable('productos')
      table.timestamps()
    })
  }
  down () {
    this.drop('comentarios')
  }
}

module.exports = ComentariosSchema
//table.integer('transmitter_id').unsigned().references('id').inTable('users')
//table.integer('receiver_id').unsigned().references('id').inTable('users')
