//two changes two classes

	$(window).scroll(function() { 
	   
    var scroll = $(window).scrollTop();
     
    if (scroll >= 600) {	
        $(".edwardfellows").addClass("change");} 

    else {

        $(".edwardfellows").removeClass("change");}
        
 });

//second class change same scoll or diff

	$(window).scroll(function() { 
	   
    var scrolltext = $(window).scrollTop();
     
    if (scrolltext >= 1600) {	
        $(".edwardfellows").addClass("change1");} 

    else {

        $(".edwardfellows").removeClass("change1");}
        
 });
 
// toggle function

$(document).ready(function()	{

    $(".toggle").click (function () {
        $("nav ul").slideToggle ();
    });

// makes nav reappear
    
    $(window).resize(function (){
	    
	    if ( $(window) .width () > 500 ) {
		    
		$('nav ul').removeAttr("style")  
		  
	    }
    })

});