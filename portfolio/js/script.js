//smooth scroll
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//fixtop
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 800) {
            $('nav').addClass('stickytop');
        }
        else {
            $('nav').removeClass('stickytop');
        }
    });
});

//change background
$(document).ready(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       
       if (currentScroll > previousScroll){
           $("nav").removeClass("navbg");} 
       
       else {
	   $("nav").addClass("navbg");}
       previousScroll = currentScroll;
       
    });
}());

//text change
$(document).ready(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       
       if (currentScroll > previousScroll){
           $("nav ul li a").addClass("navtext");} 
       
       else {
	   $("nav ul li a").removeClass("navtext");}
       previousScroll = currentScroll;
       
    });
}());

//form active
$(document).ready (function() {
	$("textarea, input").click (function() {	
		$("textarea, input").css ({background: "#f5f5f5"});	})
;});









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












