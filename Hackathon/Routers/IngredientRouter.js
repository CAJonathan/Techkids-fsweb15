const express = require("express");
const IngredientRouter = express.Router();

const IngredientModel = require("../Models/Ingredient");

IngredientRouter.use((req, res, next) => {
    next();
});

IngredientRouter.get("/", async(req, res) => {
    try {
        const ingredients = await IngredientModel.find({}, "name unit kcalPerUnit protein fat glucozo fiber");
        res.json({ success: 1, ingredients })
    } catch (error) {
        res.status(500).json({ success: 0, error: err });
    }
});

IngredientRouter.get("/:id", async(req, res) => {
    var ingredientId = req.params.id;
    try {
        const ingredientFound = await IngredientModel.findById(ingredientId)
        if(!ingredientFound){
            res.json({success: 0, message: "Not found!"});
        } else{
            res.json({success: 0, ingredient: ingredientFound});
        }
    } catch (error) {
        res.status(500).json({success: 0, message: error})
    }
});

IngredientRouter.post("/", async(req, res) => {
    const {name, unit, kcalPerUnit, protein, fat, glucozo, fiber} = req.body;
    try {
        const ingredientCreated = await IngredientModel.create({name, unit, kcalPerUnit, protein, fat, glucozo, fiber});
        res.status(201).json({success: 1, Ingredient: ingredientCreated});
    } catch (error) {
        res.status(500).json({success: 0, message: error});
    }
})

IngredientRouter.put("/:id", async (req, res) => {
    var ingredientId = req.params.id;
    const {name, unit, kcalPerUnit, protein, fat, glucozo, fiber} = req.body;
    try {
        const ingredientFound = await IngredientModel.findById(ingredientId);
        if(!ingredientFound){
            res.status(404).json({success: 0, message: "Not Found!"})
        } else{
            for(key in {name, unit, kcalPerUnit, protein, fat, glucozo, fiber}){
                if(ingredientFound[key] && req.body[key]){
                    ingredientFound[key] = req.body[key];
                }
            }
            let ingredientUpdated = await ingredientFound.save();
            res.json({success: 1, ingredient: ingredientUpdated});
        }
    } catch (error) {
        console.log(error)
    }
})

IngredientRouter.delete("/:id", async(req, res) => {
    const ingredientId = req.params.id;
    try {
        await IngredientModel.remove({_id:ingredientId});
        res.json({success: 1});
    } catch (error) {
        res.status(500).json({success: 0, message: err})
    }
})

module.exports = IngredientRouter;