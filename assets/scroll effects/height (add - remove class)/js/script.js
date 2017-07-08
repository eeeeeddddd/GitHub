//two changes two classes

	$(window).scroll(function() { 
	   
    var scroll = $(window).scrollTop();
     
    if (scroll >= 50) {	
        $(".header").addClass("change");} 

    else {

        $(".header").removeClass("change");}
        
 });

//second class change same scoll or diff

	$(window).scroll(function() { 
	   
    var scrolltext = $(window).scrollTop();
     
    if (scrolltext >= 50) {	
        $(".text").addClass("change-text");} 

    else {

        $(".text").removeClass("change-text");}
        
 });

