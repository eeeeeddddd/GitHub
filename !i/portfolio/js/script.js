// toggle function

$(document).ready(function()	{

    $(".toggle").click (function () {
        $("nav ul").slideToggle (1);
    });

// makes nav reappear
    
    $(window).resize(function (){
	    
	    if ( $(window) .width () > 500 ) {
		    
		$('nav ul').removeAttr("style")  
		  
	    }
    })

});

//fixtop
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 790) {
            $('nav').addClass('stickytop');
        }
        else {
            $('nav').removeClass('stickytop');
        }
    });
});
//fixtoptext
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 790) {
            $('nav ul li a').addClass('stickytoptext');
        }
        else {
            $('nav ul li a').removeClass('stickytoptext');
        }
    });
});

//nav scroll size
$(document).ready(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       
       if (currentScroll > previousScroll){
           $("nav").removeClass("navscroll");} 
       
       else {
	   $("nav").addClass("navscroll");}
       previousScroll = currentScroll;
       
    });
}());

//nac scroll text
$(document).ready(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       
       if (currentScroll > previousScroll){
           $("nav ul li a").removeClass("navscrolltext");} 
       
       else {
	   $("nav ul li a").addClass("navscrolltext");}
       previousScroll = currentScroll;
       
    });
}());

//form active
$(document).ready (function() {
	$("textarea, input").click (function() {	
		$("textarea, input").css ({background: "#f5f5f5"});	})
;});

//------------------------------

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {
            $('.line1').addClass('percent85');
            $('.line2').addClass('percent90');
            $('.line3').addClass('percent85');
            $('.line4').addClass('percent70');
            $('.line5').addClass('percent70');
            $('.line6').addClass('percent85');
            $('.line7').addClass('percent85');
            $('.line8').addClass('percent70');
            $('.line9').addClass('percent70');
            $('.line10').addClass('percent70');            
        }
        else {
            $('.line1').removeClass('percent85');
            $('.line2').removeClass('percent90');
            $('.line3').removeClass('percent85');
            $('.line4').removeClass('percent70');
            $('.line5').removeClass('percent70');
            $('.line6').removeClass('percent85');
            $('.line7').removeClass('percent85');
            $('.line8').removeClass('percent70');
            $('.line9').removeClass('percent70');
            $('.line10').removeClass('percent70');            
        }
    });
});

// //smooth scroll
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












