//works out height

//how far from the top is the menu when the page loads?	  
var Offset = $("nav").offset().top;

//as the page is scrolling, measure how far we've scrolled
$(window).scroll(function() {
  var Scrolled = $(window).scrollTop();

  //if we have scrolled past the menu offset, make it stick
  if (Scrolled >= Offset) {
    $("nav").addClass("stickytop");
  }else{
    $("nav").removeClass("stickytop");
  }
});
