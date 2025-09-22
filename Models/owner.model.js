const mongoose = require('mongoose');
const ownerSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,  
        minLength:3,
        trim:true
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[],
    },
    picture:String,
    gstin:String
});
const ownerModel = mongoose.model('owner',ownerSchema);  
module.exports = ownerModel;