//getElementsByTagName

function pig(){
	
	var dog = document.getElementsByTagName("p");
	
	var cat = dog[0].style.color="blue";
	var cat = dog[1].style.color="blue";
	var cat = dog[2].style.color="blue";
	var cat = dog[3].style.color="blue";
	
//or loop it
//for (var i = 0; i< dog.length; i++)
//	dog[i].style.color="blue";
}