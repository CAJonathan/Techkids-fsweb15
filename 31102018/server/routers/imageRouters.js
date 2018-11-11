const express = require("express");;
const ImageRouter = express.Router();

const ImageModel = require("../model/imageModel");

ImageRouter.use((req, res, next) => {
    next();
});

ImageRouter.get("/", async(req, res) => {
    try {
        const images = await ImageModel.find({}, "user view like comment caption title").populate("user");
        res.json({ success: 1, images })
    } catch (error) {
        res.status(500).json({ success: 0, error: err });
    }
});

ImageRouter.get("/:id", async(req, res) => {
    var imageId = req.params.id;
    try {
        const imageFound = await ImageModel.findById(imageId)
        if(!imageFound){
            res.json({success: 0, message: "Not found!"});
        } else{
            res.json({success: 0, image: imageFound});
        }
    } catch (error) {
        res.status(500).json({success: 0, message: error})
    }
});

ImageRouter.post("/", async(req, res) => {
    const {user, url, caaption, title} = req.body;
    try {
        const imageCreated = ImageModel.create({user, url, caption, title});
        res.status(201).json({success: 1, image: imageCreated});
    } catch (error) {
        res.status(500).json({success: 0, message: error});
    }
})

ImageRouter.put("/:id", async (req, res) => {
    var imageId = req.params.id;
    const {caption, title} = req.body;
    try {
        const imageFound = await ImageModel.findById(imageId);
        if(!imageFound){
            res.status(404).json({success: 0, message: "Not Found!"})
        } else{
            for(key in {caption, title}){
                if(imageFound[key] && req.body[key]){
                    imageFound[key] = req.body[key];
                }
            }
            let imageUpdated = await imageFound.save();
            res.json({success: 1, image: imageUpdated});
        }
    } catch (error) {
        console.log(error)
    }
})

ImageRouter.delete("/:id", async(req, res) => {
    const imageId = req.params.id;
    try {
        ImageModel.remove({_id:imageId});
        res.json({success: 1});
    } catch (error) {
        res.status(500).json({success: 0, message: err})
    }
})

module.exports = ImageRouter;