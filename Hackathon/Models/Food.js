const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Material = new Schema({
    reference: { type: Schema.Types.ObjectId, ref: "Ingredient" },
    quantity: {type: Number}
}, {
    _id: false
});

const FoodSchema = new Schema({
    name: {type: String, require: true, unique: true},
    component: [Material]
});

module.exports = mongoose.model("Food", FoodSchema);