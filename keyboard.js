document.onkeydown = function(event){
	if(!event.repeat){
		log(event.keyCode + ' ' + String.fromCharCode(event.keyCode) +'<br>');
		if(event.keyCode === 68)
			player1.pressingRight = true;
		else if(event.keyCode === 83)
			player1.pressingDown = true;
		else if(event.keyCode === 65)
			player1.pressingLeft = true;
		else if(event.keyCode === 87)
			player1.pressingUp = true;
	}
}

document.onkeyup = function(event){
	document.getElementById("log").innerHTML="";
	if(event.keyCode === 68)
		player1.pressingRight = false;
	else if(event.keyCode === 83)
		player1.pressingDown = false;
	else if(event.keyCode === 65)
		player1.pressingLeft = false;
	else if(event.keyCode === 87)
		player1.pressingUp = false;
}

function updatePlayerPosition(){
	/*log(player1.x+" " + player1.pressingRight);*/
	//document.getElementById("log").innerHTML = JSON.stringify(player1);
	if(player1.pressingRight)
		player1.x += player1.spdX;
	if(player1.pressingLeft)
		player1.x -= player1.spdX;
	if(player1.pressingDown)
		player1.y += player1.spdY;
	if(player1.pressingUp)
		player1.y -= player1.spdY;
}
