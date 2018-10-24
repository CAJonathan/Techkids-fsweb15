const maxLength = 200;

// document.getElementById("textInput").addEventListener(
//     "input", 
//     function(){

//         var remainChar = maxLength - document.getElementById("textInput").value.length;
//         document.getElementById("remain").innerText = remainChar;
//     }    
// )


$("#textInput").on("input", function(){
    var remainChar = maxLength - $("#textInput").val().length;
    $("#remain").text(remainChar);
});

$("#btn_ask").on("click", function(){
    var question = $("#textInput").val();
    $.ajax({
        url: "/createQuestion",
        type: "POST",
        data: {questionContent: question},
        success: function(res){
            window.location.href="/question/" + res.questionId;
        },
        error: function(){

        }
    })
})

