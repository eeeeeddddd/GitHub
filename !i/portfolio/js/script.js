//sectionNavHide
var prev = 0;
var $window = $(window);
var nav = $('#sectionNav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('sectionNavHide', scrollTop > prev);
  prev = scrollTop;
});

//no show header
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 780) {
            $('#sectionNav').addClass('headerScroll');
        }
        else {
            $('#sectionNav').removeClass('headerScroll');
        }
    });
});

//form active
$(document).ready (function() {
	$("textarea, input").click (function() {	
		$("textarea, input").css ({background: "#f5f5f5"});
	})
;});

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

//about
//how far from the top is the menu when the page loads?
var aboutOffset = $(".about").offset().top;

//as the page is scrolling, measure how far we've scrolled
$(window).scroll(function() {
  var aboutScrolled = $(window).scrollTop();

  //if we have scrolled past the menu offset, make it stick
  if (aboutScrolled >= aboutOffset) {
    $(".about").addClass("stickytitle");
  }else{
    $(".about").removeClass("stickytitle");
  }
});

//design
var designOffset = $(".design").offset().top;

$(window).scroll(function() {
  var designScrolled = $(window).scrollTop();

  if (designScrolled >= designOffset) {
    $(".design").addClass("stickytitle");
  }else{
    $(".design").removeClass("stickytitle");
  }
});

//expertise
var expertiseOffset = $(".expertise").offset().top;

$(window).scroll(function() {
  var expertiseScrolled = $(window).scrollTop();

  if (expertiseScrolled >= expertiseOffset) {
    $(".expertise").addClass("stickytitle");
  }else{
    $(".expertise").removeClass("stickytitle");
  }
});

//qualifications
var qualificationsOffset = $(".qualifications").offset().top;

$(window).scroll(function() {
  var qualificationsScrolled = $(window).scrollTop();

  if (qualificationsScrolled >= qualificationsOffset) {
    $(".qualifications").addClass("stickytitle");
  }else{
    $(".qualifications").removeClass("stickytitle");
  }
});

//portfolio
var portfolioOffset = $(".portfolio").offset().top;

$(window).scroll(function() {
  var portfolioScrolled = $(window).scrollTop();

  if (portfolioScrolled >= portfolioOffset) {
    $(".portfolio").addClass("stickytitle");
  }else{
    $(".portfolio").removeClass("stickytitle");
  }
});

//experience
var experienceOffset = $(".experience").offset().top;

$(window).scroll(function() {
  var experienceScrolled = $(window).scrollTop();

  if (experienceScrolled >= experienceOffset) {
    $(".experience").addClass("stickytitle");
  }else{
    $(".experience").removeClass("stickytitle");
  }
});

//menu
var menuOffset = $(".menu").offset().top;

$(window).scroll(function() {
  var menuScrolled = $(window).scrollTop();

  if (menuScrolled >= menuOffset) {
    $(".menu").addClass("stickytitle");
  }else{
    $(".menu").removeClass("stickytitle");
  }
});





//not used





//nav scroll size
// $(document).ready(function () {
//     var previousScroll = 0;
//     
//     $(window).scroll(function () {
//        var currentScroll = $(this).scrollTop();
//        
//        if (currentScroll > previousScroll){
//            $("nav").removeClass("navscroll");} 
//        
//        else {
// 	   $("nav").addClass("navscroll");}
//        previousScroll = currentScroll;      
//     });
// }());

//fixtop
// $(function(){
//     $(window).scroll(function() {
//         if ($(this).scrollTop() >= 780) {
//             $('nav').addClass('stickytop');
//         }
//         else {
//             $('nav').removeClass('stickytop');
//         }
//     });
// });

// // toggle function
// $(document).ready(function()	{
// 
//     $(".toggle").click (function () {
//         $("nav ul").slideToggle (1);
//     });
// 
// // makes nav reappear
// $(window).resize(function (){    
// 	if ( $(window) .width () > 500 ) {	    
// 			$('nav ul').removeAttr("style")  		  
// 	    }
//     })
// });