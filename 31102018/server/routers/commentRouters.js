const express = require("express");;
const CommentRouter = express.Router();

const ImageModel = require("../model/commentModel");

CommentRouter.use((req, res, next) => {
    next();
});

CommentRouter.get("/", async(req, res) => {
    try {
        const comments = await ImageModel.find({}, "user content").populate("content");
        res.json({ success: 1, comments })
    } catch (error) {
        res.status(500).json({ success: 0, error: err });
    }
});

CommentRouter.get("/:id", async(req, res) => {
    var commentId = req.params.id;
    try {
        const commentFound = await ImageModel.findById(commentId)
        if(!commentFound){
            res.json({success: 0, message: "Not found!"});
        } else{
            res.json({success: 0, comment: commentFound});
        }
    } catch (error) {
        res.status(500).json({success: 0, message: error})
    }
});

CommentRouter.post("/", async(req, res) => {
    const {user, comment} = req.body;
    try {
        const commentCreated = ImageModel.create({user, comment});
        res.status(201).json({success: 1, comment: commentCreated});
    } catch (error) {
        res.status(500).json({success: 0, message: error});
    }
})

CommentRouter.put("/:id", async (req, res) => {
    var commentId = req.params.id;
    const {content} = req.body;
    try {
        const commentFound = await ImageModel.findById(commentId);
        if(!commentFound){
            res.status(404).json({success: 0, message: "Not Found!"})
        } else{
            for(key in comment){
                if(commentFound[key] && req.body[key]){
                    commentFound[key] = req.body[key];
                }
            }
            let commentUpdated = await commentFound.save();
            res.json({success: 1, comment: commentUpdated});
        }
    } catch (error) {
        console.log(error)
    }
})

CommentRouter.delete("/:id", async(req, res) => {
    const commentId = req.params.id;
    try {
        ImageModel.remove({_id:commentId});
        res.json({success: 1});
    } catch (error) {
        res.status(500).json({success: 0, message: err})
    }
})

module.exports = CommentRouter;