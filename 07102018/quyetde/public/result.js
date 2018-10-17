const params = new URL(window.location.href).pathname.split("/");
const questionId = params[params.length - 1];

$.ajax({
    url: "/questionDetail/" + questionId,
    type: "GET",
    success: function(response){
        if(response && response.success){
            let question = response.question;
            let total = question.yes + question.no;
            let voteYes = ((question.yes / total) * 100).toFixed(2);
            let voteNo = ((question.no / total) * 100).toFixed(2);
            if(total === 0){
                voteYes = 0;
                voteNo = 0;
            }

            $("#questionContent").text(question.questionContent);
            $("totalVote").text(question.yes + question.no);
            $("#yes").text(voteYes);
            $("#no").text(voteNo);
        }
    },
    error: function(){
        console.log(error);
    }
})