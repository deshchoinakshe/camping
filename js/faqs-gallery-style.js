$(document).ready(function(){
    $('.photos__slider').slick({
        arrows: true, 
        slidesToShow: 2,
        speed: 2000,
        centerMode:true,
        appendArrows: $('.photos__arrows'),
    }); 
});