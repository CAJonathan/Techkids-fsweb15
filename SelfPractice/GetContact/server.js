const express = require("express");;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ContactModel = require("./Model/ContactModel");

mongoose.connect("mongodb://127.0.0.1/Contact", { useCreateIndex: true, useNewUrlParser: true }, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("Connected");
    }
});

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "../public/index.html")
})

app.post("/", async(req, res) => {
    const {name, phone} = req.body;
    try {
        const contactCreated = await ContactModel.create({name, phone});
        console.log(contactCreated);
        res.json({success: 1, contactCreated});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: 0, error});
    }
})

const port = 8888;
app.listen(port, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("Server is listening at port " + port);
    }
})
