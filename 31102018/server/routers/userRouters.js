const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const UserRouter = express.Router();

const UserModel = require("../model/userModel");

UserRouter.use((req, res, next) => {
    next();
});

UserRouter.get("/", async(req, res) => {
    try {
        const users = await UserModel.find({}, "name email hashPassword avatar intro post").populate("post");
        res.json({ success: 1, users })
    } catch (error) {
        res.status(500).json({ success: 0, error: err });
    }
});

UserRouter.get("/:id", async(req, res) => {
    var userId = req.params.id;
    try {
        const userFound = await UserModel.findById(userId)
        if(!userFound){
            res.json({success: 0, message: "Not found!"});
        } else{
            res.json({success: 0, user: userFound});
        }
    } catch (error) {
        res.status(500).json({success: 0, message: error})
    }
});

UserRouter.use((req, res, next) => {
    const {userInfo} = req.body;
    if(userInfo && userInfo >= 1){
        next();
    } else{
        rea.status(401).json({success: 0, message: "Permission denied"})
    }
})

UserRouter.post("/", async(req, res) => {
    const {name, email, password, avatar, intro} = req.body;
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
    try {
        const userCreated = await UserModel.create({name, email, hashPassword, avatar, intro});
        res.status(201).json({success: 1, user: userCreated});
    } catch (error) {
        res.status(500).json({success: 0, message: error});
    }
})

UserRouter.put("/:id", async (req, res) => {
    var userId = req.params.id;
    const {name, password, avatar, intro, post} = req.body;
    try {
        const userFound = await UserModel.findById(userId);
        if(!userFound){
            res.status(404).json({success: 0, message: "Not Found!"})
        } else{
            for(key in {name, password, avatar, intro, post}){
                if(userFound["hashPassword"] && req.body["password"]){
                    const plainPasswordNew = req.body["password"];
                    const hashPasswordOld = userFound["hashPassword"];
                    if(bcrypt.compareSync(plainPasswordNew, hashPasswordOld)){
                        userFound["hashPassword"] = bcrypt.hashSync(plainPasswordNew, bcrypt.genSaltSync());
                    }
                }else if(userFound[key] && req.body[key]){
                    userFound[key] = req.body[key];
                }
            }
            let userUpdated = await userFound.save();
            res.json({success: 1, user: userUpdated});
        }
    } catch (error) {
        console.log(error)
    }
})

UserRouter.delete("/:id", async(req, res) => {
    const userId = req.params.id;
    try {
        UserModel.remove({_id:userId});
        res.json({success: 1});
    } catch (error) {
        res.status(500).json({success: 0, message: err})
    }
})

module.exports = UserRouter;