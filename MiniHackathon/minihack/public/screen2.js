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
        }
    },
    error: function(){
        console.log(error);
    }
})

$("#addRound").on("click", function() {
    rounds ++;
    var newRound =  `<tr>
                        <th scope="col">Round ${rounds + 1}</th>
                        <th scope="col" id="player1">
                            <input id="${rounds}0" data-row="${rounds}" data-column="0" type="number" class="form-control" value=0>
                        </th>
                        <th scope="col" id="player2">
                            <input id="${rounds}1" data-row="${rounds}" data-column="1" type="number" class="form-control" value=0>
                        </th>
                        <th scope="col" id="player3">
                            <input id="${rounds}2" data-row="${rounds}" data-column="2" type="number" class="form-control" value=0>
                        </th>
                        <th scope="col" id="player4">
                            <input id="${rounds}3" data-row="${rounds}" data-column="3" type="number" class="form-control" value=0>
                        </th>
                    </tr>`
    $("#rounds").append(newRound);

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

$(document).on("input", ".form-control", function() {
    $.ajax({
        url: "/update",
        type: "POST",
        data: {id: gameId, row: $(this).data("row"), column: $(this).data("column"), val: $(this).val()},
        success: function(res){
            if(res.success){
                var sum = 0;
                for(var i = 0 ; i < rounds + 1 ; i ++){
                    sum += $("#" + $(this).data("row") + $(this).data("column")).val();
                }
                $("#player" + $(this).data("column") + "Score").text(sum);
            }
        },
        error: function(error){
            console.log(error);
        }
    })
})