const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

mongoose.connect("mongodb://127.0.0.1/keep-fit", { useCreateIndex: true, useNewUrlParser: true }, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("Connected to keep-fit");
    }
});

const userRouter = require("./Routers/UserRouter");
const ingredientRouter = require("./Routers/IngredientRouter");
const foodRouter = require("./Routers/FoodRouter");
const authRouter = require("./routers/AuthRouter");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(session({
    secret: "lskjdfvnljhberybouiybdfs;vjnweirtunipertg",
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        httpOnly: false,
        maxAge: 7*24*60*60*1000
    }
}))

app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/ingredient", ingredientRouter);
app.use("/api/auth", authRouter);

app.get("/api", (req, res) => {
    req.session.username = "dongonson"
    console.log(req.session);
    console.log(req.sessionID);
    res.send("LOL")
})

app.get("/", (req, res) => {
    res.send("sjdvbhjsdfv");
})

const port = 8888;
app.listen(port, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("Server is listening at port " + port);
    }
})