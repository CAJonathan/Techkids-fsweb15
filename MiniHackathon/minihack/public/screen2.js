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
    var newRound = 
    `<tr>
        <th scope="col">Round ${game.rounds.length + 1}</th>
        <th scope="col" id="player1">
        <input data-row="${game.rounds.length + 1}" data-column="0" type="number" class="form-control" value=0>
        </th>
        <th scope="col" id="player2">
        <input data-row="${game.rounds.length + 1}" data-column="1" type="number" class="form-control" value=0>
        </th>
        <th scope="col" id="player3">
        <input data-row="${game.rounds.length + 1}" data-column="2" type="number" class="form-control" value=0>
        </th>
        <th scope="col" id="player4">
        <input data-row="${game.rounds.length + 1}" data-column="3" type="number" class="form-control" value=0>
        </th>
    </tr>`

    $("#rounds").append(newRound);
    $.ajax({
        url: "/addRound/" + gameId,
        type: "POST",
        success: function(res){
        },
        error: function(error){
            console.log(error);
        }
    })
})

$(document).on("input", ".form-control", function() {
    $.ajax({
        url: "/update",
        type: "POST",
        data: {gameId: game._id, row: $(this).data("row"), column: $(this).data("column"), val: $(this).val()},
        success: function(res){
            if(res.success){

            }
        },
        error: function(error){
            console.log(error);
        }
    })
})