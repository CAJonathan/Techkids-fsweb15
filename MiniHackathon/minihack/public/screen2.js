const params = new URL(window.location.href).pathname.split("/");
const gameId = params[params.length - 1];

$.ajax({
    url: "/gameDetail/" + gameId,
    type: "GET",
    success: function(result){
        if(result){
            console.log(result.playerName1);
            $("#player1").text(result.playerName1);
        }
    },
    error: function(){
        console.log(error);
    }
})