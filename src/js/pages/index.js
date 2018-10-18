$(document).ready(function(){

    hoy = new Date();
    if(hoy.getTime()< new Date('2018/10/20 10:00:00').getTime())
        $("#openingModal").modal();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        autoplayHoverPause: true,
        slideBy:3,
        mouseDrag: false,
        dotsContainer: '.owl-dots',

        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3,
            },
        }
    });
});
