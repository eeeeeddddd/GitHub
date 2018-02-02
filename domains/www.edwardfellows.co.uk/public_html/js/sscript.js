$(document).ready(function () {

    var navOffset = jQuery("nav").offset().top;

    jQuery("nav").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());
    jQuery(window).scroll(function () {

        var scrollPos = jQuery(window).scrollTop();

        if (scrollPos >= navOffset) {
            jQuery("nav").addClass("fixed");

        } else {
            jQuery("nav").removeClass("fixed");
        }
    });
});

$(function() {
    	$("#splash").delay(2000).fadeOut(2000);
    	$('header, nav, section, footer').hide().delay(3000).fadeIn(4000);
});

//click hide
// $(document).ready(function () {
// 
//     $('#splashinner').click(function () {
//         $('#splash').fadeOut(1200);
//         $('header, nav, section, footer').hide().delay(2000).fadeIn(2000);
// 
//     });
// });

//delay fade