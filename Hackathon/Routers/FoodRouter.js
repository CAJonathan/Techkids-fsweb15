const express = require("express");
const FoodRouter = express.Router();

const FoodModel = require("../Models/Food");

FoodRouter.use((req, res, next) => {
    next();
});

FoodRouter.get("/", async(req, res) => {
    try {
        const foods = await FoodModel.find({}, "name component");
        res.json({ success: 1, foods })
    } catch (error) {
        res.status(500).json({ success: 0, error: error });
    }
});

FoodRouter.get("/:id", async(req, res) => {
    var foodId = req.params.id;
    try {
        const foodFound = await FoodModel.findById(foodId)
        if(!foodFound){
            res.json({success: 0, message: "Not found!"});
        } else{
            res.json({success: 0, food: foodFound});
        }
    } catch (error) {
        res.status(500).json({success: 0, message: error})
    }
});

FoodRouter.post("/", async(req, res) => {
    const {name, component} = req.body;
    try {
        const foodCreated = await FoodModel.create({name, component});
        res.status(201).json({success: 1, Food: foodCreated});
    } catch (error) {
        res.status(500).json({success: 0, message: error});
    }
})

FoodRouter.put("/:id", async (req, res) => {
    var foodId = req.params.id;
    const {name, component} = req.body;
    try {
        const foodFound = await FoodModel.findById(foodId);
        if(!foodFound){
            res.status(404).json({success: 0, message: "Not Found!"})
        } else{
            for(key in {name, component}){
                if(FoodFound[key] && req.body[key]){
                    FoodFound[key] = req.body[key];
                }
            }
            let FoodUpdated = await FoodFound.save();
            res.json({success: 1, Food: FoodUpdated});
        }
    } catch (error) {
        console.log(error)
    }
})

FoodRouter.delete("/:id", async(req, res) => {
    const foodId = req.params.id;
    try {
        await FoodModel.remove({_id:foodId});
        res.json({success: 1});
    } catch (error) {
        res.status(500).json({success: 0, message: err})
    }
})

module.exports = FoodRouter;