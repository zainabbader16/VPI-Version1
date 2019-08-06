/*-------------------------------------------links to CSS Files-----------------------------------------------------------------****************************************
Credit to Owl Carousel Template
DO NOT CHANGE THIS FILE
contains small slider functionality
********************************************/
$(document).ready(function(){
$('.slider-active').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});