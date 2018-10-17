function getQuestion(){
    $.ajax({
        url: "http://localhost:8888/getQuestion",
        type: "GET",
        success: function(response){
            if(response){
                $("#question").text(response.questionContent);
                $(".answer_btn").data("questionId", response.__id);
                $("#result").attr("href", "/question/" + response.__id);
            }
        },
        error: function(){
            console.log(error);
        }
    })
}

getQuestion();

$("#otherQuestion").on("click", function(){
    getQuestion();
})

$("#answer_btn").on("click", function(){
    let questionId = $(this).data("questionId");
    $.ajax({
        url: "http://localhost:8888/answer",
        type: "POST",
        data: $(this).data(),
        success: function(response){
            if(response.success){
                window.location.href="/question/" + questionId;
            }
        },
        error: function(error){
            console.log(error);
        }
    })
})

