// scroll actived in either direction
 
var prev = 0;
var $window = $(window);
var nav = $('#menu');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

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










