const params = new URL(window.location.href).pathname.split("/");
const gameId = params[params.length - 1];
var game;

$.ajax({
    url: "/gameDetail/" + gameId,
    type: "GET",
    success: function(result){
        if(result){
            $("#player1").text(result.playerName1);
            $("#player2").text(result.playerName2);
            $("#player3").text(result.playerName3);
            $("#player4").text(result.playerName4);
            game = result;
        }
    },
    error: function(){
        console.log(error);
    }
})

$("#addRound").on("click", function() {
    var newRound = `<tr>
        <th scope="col">Round ${game.rounds.length}</th>
        <th scope="col" id="player1">
        <input type="number" class="form-control">
        </th>
        <th scope="col" id="player2">
        <input type="number" class="form-control">
        </th>
        <th scope="col" id="player3">
        <input type="number" class="form-control">
        </th>
        <th scope="col" id="player4">
        <input type="number" class="form-control">
        </th>
    </tr>`
    console.log(game.rounds.length);
    $("#rounds").append(newRound);
})