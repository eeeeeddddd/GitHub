// scroll actived in either direction
 
$(document).ready(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       
       if (currentScroll > previousScroll){
           $("#nav").addClass("change");} 
       
       else {
	   $("#nav").removeClass("change");}
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

//toggle

$(document).ready(function()	{

    $(".toggle").click (function () {
        $("#nav ul").slideToggle ();
	});

});










