(function(){
	var numwins = 0;
	var songs = [{
		"title": "Abbey Road",
		"artist": "Beatles",
		"song": "assets/music/holdmyhand.mp3",
		"image": "assets/images/beatles.jpg"
	}, {
		"title": "Satisfaction",
		"artist": "Rolling Stones",
		"song": "assets/music/satisfaction.mp3",
		"image": "assets/images/rollingstones.jpg"
	}, {
		"title": "s",
		"artist": "Rolling Stones",
		"song": "assets/music/satisfaction.mp3",
		"image": "assets/images/janisjoplin.jpg"
	}];
	var guesses = [];
	var numguessesallowed = 20;
	var songplaying;
	var nextsongtoplay;
	//initialize game
	//start by pressing any key
	//display place holders for letters
	//render the game state
	function init(){
		nextsongtoplay = songs[Math.floor(Math.random()*songs.length)];
		render();
	}
	function render(){
//populate the board
//populate selections
		$("#numberofguesses").text(numguessesallowed - guesses.length);
		$("#lettersalreadyguessed").text(guesses.join(", "));
		var board = [];
		for(var i in nextsongtoplay.artist){
			if(guesses.indexOf(nextsongtoplay.artist[i]) >= 0){
				board.push(nextsongtoplay.artist[i]);
			} else{
				board.push("_");
			}
		}
		$("#currentword").text(board.join(" "));

	}
	$(document).on("keydown",function(e){
		if(guesses.indexOf(e.key) >= 0){
			return;
		}
//		console.log(e.key);
		guesses.push(e.key);
		render();
	})
	init();
})();
