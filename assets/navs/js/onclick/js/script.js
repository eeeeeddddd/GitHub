//toggle button:


$(document).ready(function () {

    $("#box1").on('click', function () {
        $("#box4, #box7, #box10, #box13").slideToggle(600);
    });

});

$(document).ready(function () {

    $("#box4").on('click', function () {
        $("#box5, #box6").slideToggle(600);
    });

});

$(document).ready(function () {

    $("#box7").on('click', function () {
        $("#box8, #box9").slideToggle(600);
    });

});

$(document).ready(function () {

    $("#box10").on('click', function () {
        $("#box11, #box12").slideToggle(600);
    });

});

$(document).ready(function () {

    $("#box13").on('click', function () {
        $("#box14, #box15").slideToggle(600);
    });

});



