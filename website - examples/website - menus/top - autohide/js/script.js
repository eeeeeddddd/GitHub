//toggle button:

$(document).ready(function () {

    $("#btn").on('click', function () {
        $("#section33").slideToggle(1000);
    });

});

	$(document).ready (function() {
		
		$("#section1").hover (function(){	
			
		$("#section11").fadeIn(100) ; }  ,
		
		function(){	
		$("#section11").fadeOut(5000);
			
	});

});

	$(document).ready (function() {
		
		$("#section5").hover (function(){	
			
		$("#section55").slideDown(1000) ; }  ,
		
		function(){	
		$("#section55").slideUp(1000000);	
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

// scroll actived in either direction
 
$(document).ready(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       
       if (currentScroll > previousScroll){
           $("nav").addClass("change");} 
       
       else {
	   $("nav").removeClass("change");}
       previousScroll = currentScroll;
       
    });
}());

//loader

$(document).ready(function() {

// Hide the div
$(".loader").hide();
// Show the div in 5s
$(".loader").delay(100).fadeIn(2000);

});














