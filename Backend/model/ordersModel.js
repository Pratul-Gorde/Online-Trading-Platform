const {model} = require("mongoose");

const {ordersSchema} = require('../schemas/ordersSchema');

const ordersModel = model("orders",ordersSchema);

module.exports = {ordersSchema};