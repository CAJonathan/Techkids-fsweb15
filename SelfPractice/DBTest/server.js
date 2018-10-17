const express = require("express");
const mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://127.0.0.1/quyetde",{ useNewUrlParser: true }, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("Connected");
    }
})
console.log("aaa");

app.listen(8888, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("OKAY");
    }
})