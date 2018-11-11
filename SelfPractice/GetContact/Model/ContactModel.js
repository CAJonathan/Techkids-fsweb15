const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {type: String, require: true},
    phone: {type: Number, require: true, unique: true},
});

module.exports = mongoose.model("Contact", ContactSchema);