// $("#switch").click(function(){
//     $.get("/getQuestion", function(data, status){
//         document.getElementById("question").innerHTML = data;
//     });
// });


function getQuestion(){
    $.ajax({
        url: "http://localhost:8888/getQuestion",
        type: "GET",
        success: function(response){
            if(response){
                $("#question").text(response.questionContent);
                $(".answer_btn").data("questionId", response.id);
                $("#result").data("questionId", response.id);
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
    $.ajax({
        url: "http://localhost:8888/answer",
        type: "POST",
        data: $(this).data(),
        success: function(response){
            if(response.success){
                window.location.href="/";
            }
        },
        error: function(error){
            console.log(error);
        }
    })
})

$("#result").on("click", function(){
    $.ajax({
        url: "http://localhost:8888/result",
        type: "POST",
        data: $(this).data(),
        success: function(response){
            if(response.success){
                window.location.href="/result";
            }
        },
        error: function(error){
            console.log(error);
        }
    })
})

// axios.get("http://localhost:8888/getQuestion")
// .then(function(response){
//     document.getElementById("question").innerText = response.data;
// })
// .catch(function(error){
//     console.log(error);
// })

