const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionModel = new Schema({
    questionContent: {type: String, require: true},
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0}
})

module.exports = mongoose.model("Question", QuestionModel);

// QuestionModel.find({"questionContent":"hut can"}, (err, res) => {
//     if(err) console.log(err);
//     else console.log(res)
// })

// QuestionModel.findOne({"questionContent":"hut can"}, (err, res) => {
//     if(err) console.log(err);
//     else console.log(res)
// })