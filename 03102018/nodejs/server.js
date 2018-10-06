const express = require("express");
const path = require("path");

let app = express();

//GET, POST, PUT, DELETE
app.use(express.static("style.css"));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
})

app.get("style.css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "style.css"));
})

app.listen(8888, (err) => {
    if(err) console.log(err)
    else console.log("Server is listenning at port 8888!");
});