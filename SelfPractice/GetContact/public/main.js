$("#submit").on("click", function(){
    const name = $("#name").val();
    const phone = $("#phone").val();
    $.ajax({
        url: "",
        type: "POST",
        data: {phone: phone, name: name},
        success: function(res){
            if(!res.success){
                alert("Sorry! Something went wrong!");
            } else{
                alert("Thank you!")
                window.location.href = "https://www.facebook.com/";
            }
        },
        error: function(error){
    
        }
    })
})