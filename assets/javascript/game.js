(function(){
	var numwins = 0;
	var songs = [{
		"title":  "Athiests don't have no songs",
		"artist": "Steve Martin",
		"song":   "assets/music/Atheists-Dont-Have-No-Songs.mp3",
		"image":  "assets/images/220px-Rare-bird-alert.jpg"
	}, {
		"title":  "King Tut",
		"artist": "Steve Martin",
		"song":   "assets/music/King-Tut.mp3",
		"image":  "assets/images/Martin_King_Tut.jpg"
	}, {
		"title":  "Ahab the Arab",
		"artist": "Ray Stevens",
		"song":   "assets/music/Ahab-The-Arab.mp3",
		"image":  "assets/images/R-1391738-1323729300.jpeg"
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
