(function(){
	var numwin = 0;
	var numloss = 0;
	var songs = [{
		"title":  "Athiests don't have no songs",
		"artist": "Steve Martin",
		"song":   "assets/music/Atheists-Dont-Have-No-Songs.mp3",
		"image":  "assets/images/220px-Rare-bird-alert.jpg"
	}, {
		"title":  "King Tut",
		"artist": "Steve Martin",
		"song":   "assets/music/King-Tut.mp3",
//		"image":  "assets/images/Martin_King_Tut.jpg"
		"image":  "assets/images/Martin_King_Tut_220px.jpg"
	}, {
		"title":  "Ahab the Arab",
		"artist": "Ray Stevens",
		"song":   "assets/music/Ahab-The-Arab.mp3",
//		"image":  "assets/images/R-1391738-1323729300.jpeg"
		"image":  "assets/images/R-1391738-1323729300_220px.jpg"
	}];
	var guesses = [];
	var numguessesallowed = 20;
	var songplaying;
	var nextsongtoplay;
	//initialize game
	//start by pressing any key
	//display place holders for letters
	//render the game state
	function init(won){
		songplaying = nextsongtoplay;
		if(typeof songplaying != "undefined" && won){
			$("#selection").html(songplaying.title+" - "+songplaying.artist);
			$("#box1").html("<img src='"+songplaying.image+"'/>"+
				"<audio src='"+songplaying.song+"' controls autoplay/audio>");
		}
		nextsongtoplay = songs[Math.floor(Math.random()*songs.length)];
		guesses = [];
		render();
		$("#numwin").text(numwin);
		$("#numloss").text(numloss);
	}
	function render(){
//populate the board
//populate selections
		$("#numberofguesses").text(numguessesallowed - guesses.length);
		$("#lettersalreadyguessed").text(guesses.join(", "));
		var board = [];
		var gameoverDude = true;
		for(var i in nextsongtoplay.artist){
			if(guesses.indexOf(nextsongtoplay.artist[i]) >= 0){
				board.push(nextsongtoplay.artist[i]);
			} else{
				board.push("_");
				gameoverDude = false;
			}
		}
		$("#currentword").text(board.join(" "));
		return gameoverDude;

	}
	$(document).on("keydown",function(e){
		if(guesses.indexOf(e.key) >= 0){
			return;
		}
//		console.log(e.key);
		if(guesses.length >= numguessesallowed){
			numloss = numloss+ 1;
			init();
		}
		guesses.push(e.key);
		if(render()){
			numwin = numwin+1;
			init(true);
		}
	})
	init();
})();
