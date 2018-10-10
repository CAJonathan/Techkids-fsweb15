const express = require("express");
const axios = require("axios");

var app = express();

app.get("/Data/web15.json", function(req, res){
    axios({
        url: "https://btvn-web15s.herokuapp.com/api/web15",
        method: "GET"
    }).then(res => {
           res.send({data});
      })
      .catch(err => {
        console.log(err);
      });
})

app.get("/:something", (req, res) => {
    const something = req.params.something;
    axios.get("https://btvn-web15s.herokuapp.com/api/" + something)
    .then(function(data){
        res.send(JSON.stringify(res.data));
    }).catch(err => {
        console.log(err);
    })
})

app.listen(8888, (err) => {
    if(err) console.log(err)
    else console.log("Server is listenning at port 8888!");
});