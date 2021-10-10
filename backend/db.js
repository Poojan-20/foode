const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/foode?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected");
    })
}
module.exports = connectToMongo
// const mongoose = require('mongoose')

// const DB_URI = 'mongodb://localhost:27017/foode?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
// //Database connection
// mongoose.connect(DB_URI,
// {useNewUrlParser: true, useUnifiedTopology: true});

// const connectToMongo = mongoose.connection

// module.exports = connectToMongo