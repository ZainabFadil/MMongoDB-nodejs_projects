const express = require ('express');
const mongoose = require ('mongoose');

//connect the server to mongodb

mongoose.connect('mongodb+srv://zainb1718150:zainb.2003@cluster0.pfthgcp.mongodb.net/?retryWrites=true&w=majority').then(
    ()=>console.log("finalllly connnnnected"),
    err => {
        console.log("error????")
    }
)

let app = express();
app.listen (8080, function(){
    console.log("server now is open!")
})