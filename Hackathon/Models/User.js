const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    hashPassword: {type: String, require: true},
    avatar: {type: String},
    intro: {type: String},
    goal: {type: String},
    weight: {type: Number},
    height: {type: Number}
});

UserSchema.pre("save", function(next){
    console.log(this);
    next();
})

module.exports = mongoose.model("User", UserSchema);