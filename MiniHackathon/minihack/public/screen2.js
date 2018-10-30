const params = new URL(window.location.href).pathname.split("/");
const gameId = params[params.length - 1];
var rounds = 0;

$.ajax({
    url: "/gameDetail/" + gameId,
    type: "GET",
    success: function(result){
        if(result){
            $("#player1").text(result.playerName1);
            $("#player2").text(result.playerName2);
            $("#player3").text(result.playerName3);
            $("#player4").text(result.playerName4);

            var gameRounds = result.rounds;
            rounds = gameRounds.length;
            for(let i = 0 ; i < gameRounds.length ; i ++){
                if(i > 0) {
                    AddRound(i);
                }
                for(let j = 0 ; j < 4 ; j ++){
                    $("#" + i + j).val(gameRounds[i][j]);
                }
            }
        }
    },
    error: function(){
        console.log(error);
    }
})

function AddRound(round){
    var newRound =  `<tr>
                        <th scope="col">Round ${round + 1}</th>
                        <th scope="col" id="player1">
                            <input id="${round}0" data-row="${round}" data-column="0" type="number" class="form-control" value=0>
                        </th>
                        <th scope="col" id="player2">
                            <input id="${round}1" data-row="${round}" data-column="1" type="number" class="form-control" value=0>
                        </th>
                        <th scope="col" id="player3">
                            <input id="${round}2" data-row="${round}" data-column="2" type="number" class="form-control" value=0>
                        </th>
                        <th scope="col" id="player4">
                            <input id="${round}3" data-row="${round}" data-column="3" type="number" class="form-control" value=0>
                        </th>
                    </tr>`
    $("#rounds").append(newRound);
}

$("#addRound").on("click", function() {
    AddRound(rounds);
    rounds ++;

    $.ajax({
        url: "/addRound/",
        type: "POST",
        data: {id: gameId},
        success: function(res){
        },
        error: function(error){
            console.log(error);
        }
    })
})

function CalculateSum(){

}

$(document).on("input", ".form-control", function() {
    var row = $(this).data("row");
    var column = $(this).data("column")
    var value = $(this).val()
    $.ajax({
        url: "/update",
        type: "POST",
        data: {id: gameId, row: row, column: column, val: value},
        success: function(res){
            if(res.success){
                var sum = 0;
                for(var i = 0 ; i < rounds + 1 ; i ++){
                    sum += Number($("#" + i + column).val());
                }
                $("#player" + column + "Score").text(sum);
            }
        },
        error: function(error){
            console.log(error);
        }
    })
    console.log("Request sent")
})