$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        mouseDrag: false,
        rewind: true,
        navText: ['<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'],
        autoplay:true, // автопрокрутка
        autoplayTimeout:3000, // задержка в мс
        autoplayHoverPause:false, // не останавливать при наведении
        responsive: {
            0: {
                autoplay:false, // автопрокрутка
            },
            768: {
                autoplay:true, // автопрокрутка
            },
        },
    });
});