'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemOrderSchema extends Schema {
  up () {
    this.create('item_orders', (table) => {
      table
        .integer('order_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .primary()
      table
        .integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .primary()  
      table.timestamps()
    })
  }

  down () {
    this.drop('item_orders')
  }
}

module.exports = ItemOrderSchema
