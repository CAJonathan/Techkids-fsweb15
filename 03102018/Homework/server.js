const express = require("express");
const axios = require("axios");
const fs = require("fs");

var app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/UI/index.html");
})

app.get("/UI/style.css", function(req, res){
    res.sendFile(__dirname + "/UI/style.css");
})

app.get("/APIs/api.js", function(req, res){
    //res.sendFile(__dirname + "/APIs/api.js");
})

app.get("/Data/web15.json", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web15")
      .then(res => {
           fs.writeFileSync("./Data/web15.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/Data/web15.json");
})

app.get("/Data/web14.json", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web14")
      .then(res => {
           fs.writeFileSync("./Data/web14.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/Data/web14.json");
})

app.get("/Data/web13.json", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web13")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("./Data/web13.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/Data/web13.json");
})

app.get("/Data/web12.json", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web12")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("./Data/web12.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/Data/web12.json");
})

app.get("/Data/web11.json", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web11")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("./Data/web11.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/Data/web11.json");
})

app.get("/Data/web10.json", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web10")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("./Data/web10.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/Data/web10.json");
})

app.listen(8888, (err) => {
    if(err) console.log(err)
    else console.log("Server is listenning at port 8888!");
});