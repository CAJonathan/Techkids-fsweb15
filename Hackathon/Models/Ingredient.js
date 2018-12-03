const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: {type: String, require: true, unique: true},
    unit: {type: Number, require: true},
    kcalPerUnit: {type: Number, require: true},
    protein: {type: Number, require: true},
    fat: {type: Number, require: true},
    glucozo: {type: Number, require: true},
    fiber: {type: Number, require: true}
});

module.exports = mongoose.model("Ingredient", IngredientSchema);