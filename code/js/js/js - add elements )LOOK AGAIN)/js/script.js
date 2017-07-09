function dog (){

var pig = document.createElement("h2");
var horse = document.getElementById("main");
horse.appendChild(pig);
var cow = document.createTextNode("i dont get this shit");
pig.appendChild(cow);
var chicken = document.createElement("p");
horse.appendChild(chicken);
var text = document.createTextNode("i really dont get this shit");
chicken.appendChild(text);
	
}

