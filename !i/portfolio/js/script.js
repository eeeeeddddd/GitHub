//sectionNavHide
var prev = 0;
var $window = $(window);
var nav = $('#sectionNav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('sectionNavHide', scrollTop > prev);
  prev = scrollTop;
});

// no nav show header
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

//sticky titles

//about
var aboutOffset = $(".about").offset().top;

$(window).scroll(function() {
  var aboutScrolled = $(window).scrollTop();

  if (aboutScrolled >= aboutOffset) {
    $(".about").addClass("stickytitle");
  }else{
    $(".about").removeClass("stickytitle");
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


//qualification
var qualificationOffset = $(".qualification").offset().top;

$(window).scroll(function() {
  var qualificationScrolled = $(window).scrollTop();

  if (qualificationScrolled >= qualificationOffset) {
    $(".qualification").addClass("stickytitle");
  }else{
    $(".qualification").removeClass("stickytitle");
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

//cv
var cvOffset = $(".cv").offset().top;

$(window).scroll(function() {
  var cvScrolled = $(window).scrollTop();

  if (cvScrolled >= cvOffset) {
    $(".cv").addClass("stickytitle");
  }else{
    $(".cv").removeClass("stickytitle");
  }
});

//say hello
var menuOffset = $(".menu").offset().top;

$(window).scroll(function() {
  var menuScrolled = $(window).scrollTop();

  if (menuScrolled >= menuOffset) {
    $(".menu").addClass("stickytitle");
  }else{
    $(".menu").removeClass("stickytitle");
  }
});

//cv download icon
$(document).ready (function() {
	$("#cv").hover (function() {
	$("#list").toggleClass("list");
	$("#download").toggleClass("download");
	$("#smile").toggleClass("smile");
				
		$("#cv").click (function() {
		$("#list").toggleClass("hide");
		$("#download").toggleClass("download");
		$("#template").toggleClass("hide");
		$("#smile").toggleClass("smile");				
		$("#tick").toggleClass("tick");
		$("#tickround").toggleClass("tickdraw");						
								
			$("#cv").hover(function() {
			$("#list").toggleClass("list");
			$("#download").toggleClass("download");
			$("#smile").toggleClass("smile");				
				
			});	
		});
	});
});	
	
	
	
	
	
	
	
	
	
	
//pdf 510
// $(document).ready(function () {
//     $("#510details").on('click', function () {
//         $("#ciw510pdf").slideToggle(1000);
//     });
// });
//pdf 520
// $(document).ready(function () {
//     $("#520details").on('click', function () {
//         $("#ciw520pdf").slideToggle(1000);
//     });
// });






