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

$(document).ready(function($) {
	$('.my-slider').unslider({
		   autoplay: true, 
           infinite: true,
           arrows: false,
           speed: 2000,    //  The speed to animate defalt 750 
           delay: 4000 ,    //  The delay between default 3000
           fluid: true 
           
           //animation: 'vertical',
           //animation: 'fade', 
           //keys: false,
           //arrows:	{prev: '<a class="unslider-arrow prev"><</a>',     next: '<a class="unslider-arrow next">></a>'}
         
        });
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