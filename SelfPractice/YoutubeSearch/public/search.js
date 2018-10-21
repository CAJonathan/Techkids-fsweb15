$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();
        console.log('aaa');
        const keyword = $("#keyword").val();
        $.ajax({
                    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
                    type: "GET",
                    success: function(res){
                            var items = res.items;
                            $("#result-list").html("");
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
                    },
                    error: function(){
                        console.log(error);
                        return null;
                    }
                })
        $('#result-list').empty();
    });
});