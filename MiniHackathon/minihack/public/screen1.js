$(".btn").on("submit", function(event) {
	event.preventDefault();
	let Data = {playerName1: $("#playerName1"), playerName2: $("#playerName2"), playerName3: $("#playerName3"), playerName4: $("#playerName4"),}
	$.ajax({
		url: "http://localhost:4000/createPlayer",
		type: "POST",
		data: Data,
		success: function(response) {
			window.location.href = "/screen2/"+response.gameId;
		},
		error: function(err) {
			console.log(err);
			window.location.href = "https://google.com/search?q=site:stackoverflow.com why my code didn't run";
		}
	})
});