const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');
const PlayerModel = require('./models/playerModel')


mongoose.connect("mongodb://localhost/minihack", { useNewUrlParser: true }, (err) => {
    if (err) console.log(err)
    else console.log("Success")

});
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/screen1.html');
});

app.get('/screen2/:gameId', (req, res) => {
	res.sendFile(__dirname + '/public/screen2.html');
});

app.get("/gameDetail/:gameId", (req, res) => {
	let gameId = req.params.gameId;

    PlayerModel.findById(gameId, (err, result) => {
        if(err){
            console.log(err);
        } else if(result == null){
            console.log("Not found!")
        } else{
            res.send(result);
        }
    })
})

app.post('/createPlayer', (req, res) => {
	PlayerModel.create({
        playerName1: req.body.playerName1,
        playerName2: req.body.playerName2,
        playerName3: req.body.playerName3,
        playerName4: req.body.playerName4,
	}, (err, playerCreate) => {
		if (err) console.log(req.body)
		else{res.send({gameId: playerCreate._id});}
	})
});

app.use(express.static('public'));
app.listen(4000, (err) => {
	if (err) console.log("err 2 la",err)
	else console.log('Server is listening at port 4000');
});