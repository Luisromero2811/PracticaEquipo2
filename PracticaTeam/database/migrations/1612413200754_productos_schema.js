'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('Nombre', 254).notNullable()
      table.date('Caducidad')
      table.integer('User_id').unsigned().references('id').inTable('users')
      //table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
//table.integer('transmitter_id').unsigned().references('id').inTable('users')
//table.integer('receiver_id').unsigned().references('id').inTable('users')