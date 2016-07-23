
var ctx = getId("playRoom").getContext("2d");
var WIDTH = getId("playRoom").width;
var HEIGHT = getId("playRoom").height;
ctx.font = '15pt Arial';

function updateGraphics(){
	clearCtx();
	updatePlayerPosition();
	ctx.fillRect(player1.x-5,player1.y-5,10,10);
}

function clearCtx(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

var game = {
}

game.play = function(){
	this.interval = setInterval(updateGraphics,20);
}

game.stopGame = function(){
	clearInterval(this.interval);
}