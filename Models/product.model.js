const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    Image:String,
    name :String,
    price :Number,
    discount :{
        type:Number,
        default:0
    },
    bgcolor :String,
    panalcolor :String,
    textcolor :String,

});
const productModel = mongoose.model('product',productSchema);  
module.exports = productModel;