const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    content: {type: String, require: true}
});

module.exports = mongoose.model("Comment", CommentSchema);