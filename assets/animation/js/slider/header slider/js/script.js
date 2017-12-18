$(document).ready(function($) {
	$('.my-slider').unslider({
		   autoplay: true, 
           infinite: true,
           arrows: false,
           speed: 2000,    //  The speed to animate defalt 750 
           delay: 3000     //  The delay between default 3000
           
           //animation: 'vertical',
           //animation: 'fade', 
           //keys: false,
           //arrows:	{prev: '<a class="unslider-arrow prev"><</a>',     next: '<a class="unslider-arrow next">></a>'}
         
        });
     });