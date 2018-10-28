function loadData(keyword){
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw${nextPageToken ? '&pageToken=' + nextPageToken : ''}`,
        type: "GET",
        success: function(res){
            if(res.nextPageToken){
                nextPageToken = res.nextPageToken;
            } else{
                nextPageToken = null;
            }
                var items = res.items;
                for(var i = 0 ; i < items.length ; i ++){
                    var description = items[i].snippet.description
                    var imgLink = items[i].snippet.thumbnails.medium.url;
                    var title = items[i].snippet.title
                    var id = items[i].id.videoId;

                    var element =  `<a class="result col-md-12" href="https://www.youtube.com/watch?v=${id}?autoplay=true" target="_blank">
                                        <img src="${imgLink}" alt="">
                                            <h2 class="title">${title}</h2>
                                            <p class="description">${description}</p>
                                        <span>View >></span>
                                    </a>`
                    
                    $("#result-list").append(element);
                }
                isLoading = false;
        },
        error: function(){
            console.log(error);
            return null;
        }
    })
}

var nextPageToken = null;
var isLoading = false;
var debouncing = null;

$(document).ready(function () {
    $('#search').on('input', function (event) {
        $('#result-list').empty();
        const keyword = $("#keyword").val();

        // clearTimeout(debouncing);
        // if(keyword){
        //     debouncing = setTimeout(function(){
        //         nextPageToken = null;
        //         loadData(keyword); 
        //     }, 3000);
        // } else{

        // }


        //clearTimeout(throtting);
        if(keyword){
            if(!throttle){
                throttle = true;
                setTimeout(function(){
                    nextPageToken = null;
                    loadData(keyword); 
                    throttle = false;
                }, 1000);
            } else{

            }
        }


    });

    $(window).on("scroll", function(){
        if($(document).height() - $(window).height() - $(window).scrollTop() < 20){
            if(!isLoading){
                isLoading = true;
                console.log(333);
                const keyword = $("#keyword").val();
                loadData(keyword)
            }
        }
    })
});