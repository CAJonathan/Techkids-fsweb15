const params = new URL(window.location.href).pathname.split("/");
const questionId = params[params.length - 1];

$.ajax({
    url: "/questionDetail/" + questionId,
    type: "GET",
    success: function(question){
        if(question){

            let total = question.yes + question.no;
            let voteYes = ((question.yes / total) * 100).toFixed(2);
            let voteNo = ((question.no / total) * 100).toFixed(2);
            if(total === 0){
                voteYes = 0;
                voteNo = 0;
            }

            $("#question").text(question.questionContent);
            $("totalVote").text(question.yes + question.no);
            $("#question_result_no").style("width: " + voteNo);
            $("#question_result_yes").style("width:" + voteYes);
            $("#yes").text(voteYes + "%");
            $("#no").text(voteNo + "%");
        }
    },
    error: function(){
        console.log(error);
    }
})

$("#other").on("click", function(){
    window.location.href = "/answer";
})