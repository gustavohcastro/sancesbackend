'use strict'
const ItemOrder = use("App/Models/ItemOrder")
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with itemorders
 */
class ItemOrderController {
  /**
   * Show a list of all itemorders.
   * GET itemorders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {

    // const itemOrders = await ItemOrder.all()

    // return itemOrders

    const itemOrders = await ItemOrder
    .query()
    .join('products', 'item_orders.product_id', 'products.id')
    .join('orders', 'item_orders.order_id', 'orders.id')
    .fetch()
    return itemOrders;

  }

  /**
   * Render a form to be used for creating a new itemorder.
   * GET itemorders/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Create/save a new itemorder.
   * POST itemorders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['order_id', 'product_id']);

    const newItemOrder = await ItemOrder.create(data);

    return newItemOrder
  }

  /**
   * Display a single itemorder.
   * GET itemorders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params}) {

    const order_id = params.id

    const itemOrder = await ItemOrder.query().where({order_id : order_id}).fetch()

    return itemOrder
  }

  /**
   * Render a form to update an existing itemorder.
   * GET itemorders/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */


  /**
   * Update itemorder details.
   * PUT or PATCH itemorders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a itemorder with id.
   * DELETE itemorders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  
  }
}

module.exports = ItemOrderController
