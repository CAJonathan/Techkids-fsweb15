function getQuestion(){
    $.ajax({
        url: "/getQuestion",
        type: "GET",
        success: function(response){
            if(response){
                $("#question").text(response.questionContent);
                $(".answer_btn").data("questionId", response._id);
                $("#result").attr("href", "/question/" + response._id);
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

$(".answer_btn").on("click", function(){
    let questionId = $(this).data("questionId");
    $.ajax({
        url: "/answer",
        type: "POST",
        data: $(this).data(),
        success: function(response){
            if(response.success){
                window.location.href="/question/" + questionId;
            }
        },
        error: function(error){
            console.log(333);
        }
    })
})

