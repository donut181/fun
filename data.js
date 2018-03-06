var player1 = {
	x:10,
	y:10,
	spdX : 2,
	spdY : 2,
	name : "",
	keyBindings: ['w','s','a','d','f','g','h'],
	pressingRight: false,
	pressingLeft : false,
	pressingDown : false,
	pressingUp   : false,
}

function KeyboardKeyCode(letter){
	switch(letter){
		case 'a': return 65;
		case 'b': return 66;
		case 'c': return 67;
		case 'd': return 68;
		case 'e': return 66;
		case 'f': return 67;
		case 'g': return 68;
		case 'h': return 66;
		case 'i': return 67;
		case 'j': return 68;
		case 'k': return 66;
		case 'l': return 67;
		case 'm': return 68;
		case 'n': return 66;
		case 'o': return 67;
		case 'p': return 68;
		case 'q': return 66;
		case 'r': return 67;
		case 's': return 68;
		case 't': return 66;
		case 'u': return 67;
		case 'v': return 68;
		case 'w': return 66;
		case 'x': return 67;
		case 'y': return 68;
		case 'z': return 66;
		case 'c': return 67;
		case 'd': return 68;
		case 'b': return 66;
		case 'c': return 67;
		case 'd': return 68;
		case 'b': return 66;
		case 'c': return 67;
		case 'd': return 68;
	}
}