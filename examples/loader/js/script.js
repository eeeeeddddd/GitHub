
$(document).ready(function() {

// Hide the div
$("#ed , #fellows").hide();

// Show the div in 5s
$("#ed , #fellows").delay(200).fadeIn(2000);

// split
$("#ed").animate({right: '120px'});
$("#fellows").animate({left: '130px'});

});

//two changes two classes

	$(window).scroll(function() { 
	   
    var scroll = $(window).scrollTop();
     
    if (scroll >= 320) {	
        $(".loader").addClass("change");} 

    else {

        $(".loader").removeClass("change");}
        
 });

//second class change same scoll or diff

	$(window).scroll(function() { 
	   
    var scrolltext = $(window).scrollTop();
     
    if (scrolltext >= 820) {	
        $(".loader").addClass("change1");} 

    else {

        $(".loader").removeClass("change1");}
        
 });
 
	$(window).scroll(function() { 
	   
    var scrolltext = $(window).scrollTop();
     
    if (scrolltext >= 1320) {	
        $(".loader").addClass("change2");} 

    else {

        $(".loader").removeClass("change2");}
        
 });

	$(window).scroll(function() { 
	   
    var scrolltext = $(window).scrollTop();
     
    if (scrolltext >= 1820) {	
        $(".loader").addClass("change3");} 

    else {

        $(".loader").removeClass("change3");}
        
 });














