const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

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
    let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    if(questionList.length < 1){
        res.send("");
    }

    var index = Math.floor(Math.random() * questionList.length);
    res.send(questionList[index]);
})

var currentQuestionId = 0;

app.post("/result", (req, res) => {
    var currentQuestionId = req.body.questionId;
    var questionList = JSON.parse(fs.readFileSync("./questions.json"));
    fs.writeFileSync("./current.json", JSON.stringify(questionList[currentQuestionId]));
    res.send({success: 1});
})

app.get("/current", (req, res) => {
    var currentQuestion = JSON.parse(fs.readFileSync("./current.json"));
    res.send(currentQuestion);
})

app.post("/createQuestion", (req, res) => {
    let questionList = JSON.parse(fs.readFileSync("./questions.json"));

    const newQuestion = {
        id: questionList.length,
        questionContent: req.body.questionContent,
        yes: 0,
        no: 0
    }

    questionList.push(newQuestion);

    fs.writeFileSync("./questions.json", JSON.stringify(questionList))
    res.redirect("/answer");
})

app.post("/answer", (req, res) => {
    let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    questionList[req.body.questionId][req.body.answer] ++;
    fs.writeFileSync("./questions.json", JSON.stringify(questionList))
    res.send({success: 1});
})

app.listen(8888, (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log("Server is running at port 8888");
    }
});