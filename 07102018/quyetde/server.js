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

app.get("/getQuestion", (req, res) => {
    let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    var index = Math.floor(Math.random() * questionList.length);

    res.send(questionList[index].questionContent);
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


app.listen(8888, (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log("Server is running at port 8888");
    }
});