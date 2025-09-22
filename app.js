const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./config/mongoose-connect');
const ownersRouter = require('./Routes/owners.route');
const usersRouter = require('./Routes/users.route');
const productsRouter = require('./Routes/product.route');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);
//home route for testing the server

// app.get('/',(req,res)=>{
//     res.send('index');
// });
app.listen(3000);