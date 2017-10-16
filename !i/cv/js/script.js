// toggle function
$(document).ready(function()	{

    $(".toggle").click (function () {
        $("#nav ul").slideToggle ();});

// makes nav reappear
    $(window).resize(function (){
	    if ( $(window) .width () > 500 ) {
		$('nav ul').removeAttr("style")}
    })});
    
//scroll
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

//bg change
$(document).ready(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       
       if (currentScroll > previousScroll){
           $(".nav").addClass("navchangebg");} 
       
       else {
	   $(".nav").removeClass("navchangebg");}
       previousScroll = currentScroll;
       
    });
}());

//text change
$(document).ready(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       
       if (currentScroll > previousScroll){
           $(".menu").addClass("navchangetext");} 
       
       else {
	   $(".menu").removeClass("navchangetext");}
       previousScroll = currentScroll;
       
    });
}());







