getId = function(byId){
	return document.getElementById(byId);
}

log = function(msg){
	logDiv = getId("log");
	logDiv.innerHTML += msg+"<br />";
}

showSettings = function(){
	getId("setUp1").value = "w";
	getId("setLeft1").value = "a";
	getId("setDown1").value = "s";
	getId("setRight1").value = "d";

	setFrame = getId("settingsContainer");
	setFrame.style.display = "block";
}

cancelSettings = function(){
	setFrame = getId("settingsContainer");
	setFrame.style.display = "none";
}

confirmSettings = function(){
	log("I dont know yet how to do this.")
}