

$("#getData").on("click", function(){
    $.ajax({
        url: "https://graph.facebook.com/20531316728",
        type: "GET",
        success: function(data){
            console.log(data);
        },
        error: function(err){
            console.log(err);
        }
    })
})