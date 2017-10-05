$(document).ready(function () {

    $('#splashinner').click(function () {
        $('#splash').fadeOut(1200);
        $('header, nav, section, footer').hide().delay(2000).fadeIn(2000);

    });
});

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

// $(document).ready(function () {
// 
//     $("#mark1").on('click', function () {
//         $("#mark2").slideToggle(1000);
//     }); 
// });
// 
// $(document).ready(function () {
// 
//     $("#max1").on('click', function () {
//         $("#max2").slideToggle(1000);
//     });
// 
// });
// $(document).ready(function () {
// 
//     $("#roadhouse1").on('click', function () {
//         $("#roadhouse2").slideToggle(1000);
//     });
// });

$(document).ready(function () {

    $("#roadhouser1").on('click', function () {
        $("#roadhouser2").slideToggle(1000);
    });
});

// $(document).ready(function () {
// 
//     $("#fridays1").on('click', function () {
//         $("#fridays2").slideToggle(1000);
//     });
// 
// });

$(document).ready(function () {

    $("#fridaysr1").on('click', function () {
        $("#fridaysr2").slideToggle(1000);
    });

});

$(document).ready(function () {

    $("#moversr1").on('click', function () {
        $("#moversr2").slideToggle(1000);
    });

});

// $(document).ready(function () {
// 
//     $("#white1").on('click', function () {
//         $("#white2").slideToggle(1000);
//     });
// 
// });
// 
// $(document).ready(function () {
// 
//     $("#whiter1").on('click', function () {
//         $("#whiter2").slideToggle(1000);
//     });
// 
// });
// 
// $(document).ready(function () {
// 
//     $("#rupert1").on('click', function () {
//         $("#rupert2").slideToggle(1000);
//     });
// 
// });

$(document).ready(function () {

    $("#googleonline1").on('click', function () {
        $("#googleonline2").slideToggle(1000);
    });

});

$(document).ready(function () {

    $("#googleadd1").on('click', function () {
        $("#googleadd2").slideToggle(1000);
    });

});

$(document).ready(function () {

    $("#googleana1").on('click', function () {
        $("#googleana2").slideToggle(1000);
    });

});

$(document).ready(function () {

    $("#qualifications1").on('click', function () {
        $("#qualifications2").slideToggle(1000);
    });

});

$(document).ready(function () {

    $("#qualifications3").on('click', function () {
        $("#qualifications4").slideToggle(1000);
    });

});
