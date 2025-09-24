// const mongoose = require('mongoose');
// const dbgr = require('debug')('development:mongoose');
// const config = require('config');
// mongoose.connect(`${config.get('MONGO_URI')}`)
// .then(()=>{
//     console.log("DB connected");
// })
// .catch((err)=>{
//     console.log(err);
// })
// module.exports = mongoose.connection;
require('dotenv').config();
const mongoose = require('mongoose');

// Access the environment variable
const mongoURL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(mongoURL)
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

