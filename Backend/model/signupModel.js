const {model} = require("mongoose");

const signupSchema = require("../schemas/signupSchema");

const signupModel = new model("signup",signupSchema);

module.exports = signupModel;