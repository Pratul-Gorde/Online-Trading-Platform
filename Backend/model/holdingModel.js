const {model} = require("mongoose");

const holdingSchema = require('../schemas/holdingSchema');

const holdingModel = model("holding",holdingSchema,"holdings");

module.exports = holdingModel;
