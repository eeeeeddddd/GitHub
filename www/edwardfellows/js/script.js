//Nav scroll Hide direction
var prev = 0;
var $window = $(window);
var nav = $("#sectionNav");

$window.on("scroll", function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass("sectionNavHide", scrollTop > prev);
  prev = scrollTop;
});

// no nav show header
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 780) {
            $("#sectionNav").addClass("headerScroll");
        }
        else {
            $("#sectionNav").removeClass("headerScroll");
        }
    });
});
	
//form active
$(document).ready (function() {
	$("textarea,input").click (function() {
$("textarea,input").css ({background: "#ffffff"});
	});
});

//smooth scroll
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

//cv download icon
$(document).ready (function() {
	$("#gadownload").hover (function() {
	$("#list").toggleClass("hide");
	$("#downloadtray").toggleClass("downloadtray");	
	$("#downloadarrow").toggleClass("downloadarrow");			
		$("#gadownload").click (function() {
		$("#list").toggleClass("list");
		$("#downloadtray").toggleClass("downloadtray");
		$("#downloadarrow").toggleClass("downloadarrow");
		$("#template").toggleClass("hide");				
		$("#tick").toggleClass("tick");
		$("#tickround").toggleClass("tickdraw");
		$(".cvDownload").toggleClass("cvDownloadColor");
		$(".cvDownload").text ("downloaded");
			$("#gadownload").hover(function() {
			$("#list").toggleClass("hide");
			$("#downloadtray").toggleClass("downloadtray");
			$("#downloadarrow").toggleClass("downloadarrow");				
			});	
		});
	});
});	
	
//delay cv download link
$("#delay").click(function (e) {
    e.preventDefault();
    var goTo = this.getAttribute("href");
    setTimeout(function(){
         window.location = goTo;
    },2500);       
});

//experience more detail
//wildfire
$(document).ready(function () {	
	    $("#wildclick").click (function () {
	    $("#wildetails").slideToggle(1000);	
	});
});
//maxwells
$(document).ready(function () {	
	    $("#maxclick").click (function () {
	    $("#maxdetails").slideToggle(1000);	
	});
});
//roadhouse
$(document).ready(function () {	
	    $("#roadclick").click (function () {
	    $("#roadetails").slideToggle(1000);	
	});
});
//fridays
$(document).ready(function () {	
	    $("#tgiclick").click (function () {
	    $("#tgidetails").slideToggle(1000);	
	});
});

//hover hide arrow
//wildfire
$(document).ready(function () {
	$("#wild").hover (function() {
	$(".wild").toggleClass("experienceanimation");
	$(".click").toggleClass("experienceanimation");
	});
});
//once click hidden
$(document).ready(function () {	
	    $("#wildclick").click (function () {
	    $(".wild").addClass("experienceclickhidden");	
	});
});

//maxwells
$(document).ready(function () {
	$("#max").hover (function() {
	$(".max").toggleClass("experienceanimation");
	});
});
//once click hidden
$(document).ready(function () {	
	    $("#maxclick").click (function () {
	    $(".max").addClass("experienceclickhidden");	
	});
});

//roadhouse
$(document).ready(function () {
	$("#road").hover (function() {
	$(".road").toggleClass("experienceanimation");
	});
});
//once click hidden
$(document).ready(function () {	
	    $("#roadclick").click (function () {
	    $(".road").addClass("experienceclickhidden");	
	});
});

//tgi
$(document).ready(function () {
	$("#tgi").hover (function() {
	$(".tgi").toggleClass("experienceanimation");
	});
});
//once click hidden
$(document).ready(function () {	
	    $("#tgiclick").click (function () {
	    $(".tgi").addClass("experienceclickhidden");	
	});
});

//not in use

// //sticky titles
// 
// //about
// var aboutOffset = $(".about").offset().top;
// 
// $(window).scroll(function() {
//   var aboutScrolled = $(window).scrollTop();
// 
//   if (aboutScrolled >= aboutOffset) {
//     $(".about").addClass("stickytitle");
//   }else{
//     $(".about").removeClass("stickytitle");
//   }
// });
// 
// //expertise
// var expertiseOffset = $(".expertise").offset().top;
// 
// $(window).scroll(function() {
//   var expertiseScrolled = $(window).scrollTop();
// 
//   if (expertiseScrolled >= expertiseOffset) {
//     $(".expertise").addClass("stickytitle");
//   }else{
//     $(".expertise").removeClass("stickytitle");
//   }
// });
// 
// 
// //qualification
// var qualificationOffset = $(".qualification").offset().top;
// 
// $(window).scroll(function() {
//   var qualificationScrolled = $(window).scrollTop();
// 
//   if (qualificationScrolled >= qualificationOffset) {
//     $(".qualification").addClass("stickytitle");
//   }else{
//     $(".qualification").removeClass("stickytitle");
//   }
// });
// 
// //portfolio
// var portfolioOffset = $(".portfolio").offset().top;
// 
// $(window).scroll(function() {
//   var portfolioScrolled = $(window).scrollTop();
// 
//   if (portfolioScrolled >= portfolioOffset) {
//     $(".portfolio").addClass("stickytitle");
//   }else{
//     $(".portfolio").removeClass("stickytitle");
//   }
// });
// 
// //experience
// var experienceOffset = $(".experience").offset().top;
// 
// $(window).scroll(function() {
//   var experienceScrolled = $(window).scrollTop();
// 
//   if (experienceScrolled >= experienceOffset) {
//     $(".experience").addClass("stickytitle");
//   }else{
//     $(".experience").removeClass("stickytitle");
//   }
// });
// 
// // // download
// // var downloadOffset = $(".download").offset().top;
// // 
// // $(window).scroll(function() {
// //   var downloadScrolled = $(window).scrollTop();
// // 
// //   if (downloadScrolled >= downloadOffset) {
// //     $(".download").addClass("stickytitle");
// //   }else{
// //     $(".download").removeClass("stickytitle");
// //   }
// // });
// 
// // say hello
// var menuOffset = $(".menu").offset().top;
// 
// $(window).scroll(function() {
//   var menuScrolled = $(window).scrollTop();
// 
//   if (menuScrolled >= menuOffset) {
//     $(".menu").addClass("stickytitle");
//   }else{
//     $(".menu").removeClass("stickytitle");
//   }
// });




	
	
	





