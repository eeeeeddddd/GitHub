
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

	
$(document).ready (function() {

	$(".draggable").draggable();
	$("#tabs").tabs ({event: "click"});
	$("#panels").accordion ();
	$("#cal").datepicker({numberOfMonths: 1});	
				
});
