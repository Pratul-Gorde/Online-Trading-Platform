const {Schema} = require("mongoose");


const signupSchema = new Schema({
    email: {type:String,required:true},
    password: {type:String,required:true}
});

module.exports = signupSchema;