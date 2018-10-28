const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/quyetde", {useNewUrlParser: true}, (err) => {
    if(err) console.log(err);
    else{
        console.log("Connected")
    }
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static("public"));

const port = 8088;
app.listen(port, (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log("Server is running at port " + port );
    }
});