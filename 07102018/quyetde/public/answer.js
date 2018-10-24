function getQuestion(){
    $.ajax({
        url: "/getQuestion",
        type: "GET",
        success: function(response){
            if(response){
                $("#question").text(response.questionContent);
                $("button[name='btn_yesno']").data("questionId", response._id);
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

$("button[name='btn_yesno']").on("click", function(){
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

$("#result").on("click", function(){
    let questionId = $("#yes").data("questionId");
    window.location.href="/question/" + questionId;
})

