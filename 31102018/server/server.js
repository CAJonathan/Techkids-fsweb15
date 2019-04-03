const express = require("express");;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const session = require("express-session");

mongoose.connect("mongodb://127.0.0.1/tk-hotgirl", { useCreateIndex: true, useNewUrlParser: true }, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("Connected");
    }
});

const userRouter = require("./routers/userRouters");
const imageRouter = require("./routers/imageRouters");
const commentRouter = require("./routers/commentRouters");
const authRouter = require("./routers/authRouters");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/api/users", userRouter);
app.use("/api/images", imageRouter);
app.use("/api/comments", commentRouter);
app.use("/api/auths", authRouter);

app.use(session({
    secret: "keyboardhero",
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        httpOnly: false,
        maxAge: 7*24*60*60*1000
    }
}))

app.get("/api", (req, res) => {
    // const plainTextPassword = "123456789";
    // const salt = bcrypt.genSaltSync(12);
    // const hashPassword = bcrypt.hashSync(plainTextPassword, bcrypt.genSaltSync());
    // console.log("Hash: " + hashPassword + "   Salt: " + salt);
    // console.log(bcrypt.compareSync(plainTextPassword, hashPassword));
    // console.log(bcrypt.compareSync("sjdfvbhjsdfhvbsdfv", hashPassword));
    req.session.username = "Do Ngoc Son";
    console.log(req.session);
    console.log(req.sessionID);
    res.send("Api router");
})

app.use("/api/auth", authRouter)

const port = 8000;
app.listen(port, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("Server is listening at port " + port);
    }
})
