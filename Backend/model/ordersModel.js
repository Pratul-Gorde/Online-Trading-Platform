const {model} = require("mongoose");

const {ordersSchema} = require('../schemas/ordersSchema');

const ordersModel = new model("orders",ordersSchema);

module.exports = {ordersSchema};