const express = require("express");
var app = express();

app.get("/getdata", (req, res))

app.listen(8888, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 8888");
})