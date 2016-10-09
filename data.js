var player1 = (function(){
	var player = {
		_x:10,
		_y:10,
		_spdX : 2,
		_spdY : 2,
		_name : "",
		_keyBindings: ['w','s','a','d','f','g','h'],
		_pressingRight: false,
		_pressingLeft : false,
		_pressingDown : false,
		_pressingUp   : false,
	}
	return {
		name: _name,
		
	};
})();

function letterToCode(letter){
	return letter.charCodeAt(0);
}
