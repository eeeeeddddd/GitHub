// toggle function

$(document).ready(function()	{

    $(".toggle").click (function () {
        $("#nav ul").slideToggle ();
    });

// makes nav reappear
    
    $(window).resize(function (){
	    
	    if ( $(window) .width () > 500 ) {
		    
		$('nav ul').removeAttr("style")  
		  
	    }
    })

});

// $(document).ready(function () {
//     setTimeout(function(){
//         $('.ab').fadeIn();}, 1000);
// 
// });