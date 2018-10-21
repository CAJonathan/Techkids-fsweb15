const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const mongoose = require("mongoose");

const QuestionModel = require("./model/questionModel")

mongoose.connect("mongodb://localhost/quyetde", {useNewUrlParser: true}, (err) => {
    if(err) console.log(err);
    else{
        console.log("Connected")
    }
});
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/answer.html")
})

app.get("/ask", (req, res) => {
    res.sendFile(__dirname + "/public/ask.html")
})

app.get("/answer", (req, res) => {
    res.sendFile(__dirname + "/public/answer.html")
})

app.get("/result", (req, res) => {
    res.sendFile(__dirname + "/public/result.html");
})

app.get("/getQuestion", (req, res) => {
    QuestionModel.countDocuments().exec(function (err, count) {

        var random = Math.floor(Math.random() * (count - 1))
      
        QuestionModel.findOne().skip(random).exec(
          function (err, result) {
            if(err){
                console.log(err);
            } else{
                res.send(result);
            }
          })
    })

})

app.get("/question/:questionId", (req, res) => {
    res.sendFile(__dirname + "/public/result.html");
})

app.get("/questionDetail/:questionId", (req, res) => {
    let questionId = req.params.questionId;

    QuestionModel.findById(questionId, (err, result) => {
        if(err){
            console.log(err);
        } else if(result == null){
            console.log("Not found!")
        } else{
            res.send(result);
        }
    })
})

app.post("/createQuestion", (req, res) => {
    QuestionModel.create(
        { questionContent: req.body.questionContent},
        (err, questionCreated) => {
            if(err) console.log(err)
            else res.redirect("/question/" + questionCreated._id);
        } 
    )
})

app.post("/answer", (req, res) => {
    const { questionId, answer } = req.body;

    QuestionModel.findById(questionId, (err, questionFound) => {
        if(err){
            console.log(333);
        } else if(questionFound == null){
            console.log("Not found!");
        } else{
            questionFound[answer] += 1;
            questionFound.save((err) => {
                if(err){
                    console.log(333);
                } else{
                    res.send({success: 1});
                }
            })
        }
    })
})

const port = 8088;
app.listen(port, (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log("Server is running at port " + port );
    }
});