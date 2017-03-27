function dog (){
	
	var pig = document.getElementsByClassName('para');
	
	var hello = pig[0].innerHTML 
	var world = pig[1].innerHTML 
	var addText = pig[2].innerHTML = hello + world ;
	var hello = pig[0].innerHTML = "" ; //removes lines above
	var world = pig[1].innerHTML = "" ; //removes lines above 
	
}

