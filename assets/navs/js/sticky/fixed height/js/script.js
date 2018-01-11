$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 600) {
            $('nav').addClass('stickytop');
        }
        else {
            $('nav').removeClass('stickytop');
        }
    });
});

