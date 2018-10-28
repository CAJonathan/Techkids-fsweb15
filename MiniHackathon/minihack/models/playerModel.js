const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
// const Model =  mongoose.model;

const ScoreSchema = new Schema({
    playerName1:{type:String},
    score1:{type:Number, default:0},
    playerName2:{type:String},
    score2:{type:Number, default:0},
    playerName3:{type:String},
    score3:{type:Number, default:0},
    playerName4:{type:String},
    score4:{type:Number, default:0},
});
module.exports = mongoose.model("Score", ScoreSchema);
//   const QuestionModel =  mongoose.model("Question", QuestionSchema);  
//   QuestionModel.find({"questionContent":""}, (err,questions) =>{
//       if(err) console.log(err)
//       else console.log("q ", questions)
//   })
 