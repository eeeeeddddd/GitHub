$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            $('nav').addClass('stickytop');
        }
        else {
            $('nav').removeClass('stickytop');
        }
    });
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
