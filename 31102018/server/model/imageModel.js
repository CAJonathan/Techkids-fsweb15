const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    view: {type: Number, default: 0},
    like: {type: String, require: true, default: 0},
    url: {type: String, require: true},
    caption: {type: String},
    title: {type: String, require: true},
    comment: {type: Schema.Types.ObjectId, ref: "Comment"},
}, {
    timestamps: true    // created_at & updated_at
});

module.exports = mongoose.model("Image", ImageSchema);