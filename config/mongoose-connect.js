const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://pawan0101:pawan1234@cluster0.kkyzhd4.mongodb.net/")
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})
module.exports = mongoose.connection;
