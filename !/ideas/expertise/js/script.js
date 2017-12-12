//fixtop
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 800) {
            $('.line1').addClass('percent85');
            $('.line2').addClass('percent90');
            $('.line3').addClass('percent85');
            $('.line4').addClass('percent75');
            $('.line5').addClass('percent70');
            $('.line6').addClass('percent85');
            $('.line7').addClass('percent85');
            $('.line8').addClass('percent70');
            $('.line9').addClass('percent70');
            $('.line10').addClass('percent70');            
        }
        else {
            $('.line1').removeClass('percent85');
            $('.line2').removeClass('percent90');
            $('.line3').removeClass('percent85');
            $('.line4').removeClass('percent75');
            $('.line5').removeClass('percent70');
            $('.line6').removeClass('percent85');
            $('.line7').removeClass('percent85');
            $('.line8').removeClass('percent70');
            $('.line9').removeClass('percent70');
            $('.line10').removeClass('percent70');            
        }
    });
});
