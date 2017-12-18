// scroll actived in either direction
 
$(document).ready(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       
       if (currentScroll > previousScroll){
           $(".header").addClass("change");} 
       
       else {
	   $(".header").removeClass("change");}
       previousScroll = currentScroll;
       
    });
}());

