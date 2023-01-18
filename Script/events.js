var swiper = new Swiper('.events-slider',{
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert:false,
    },
    //autoHeight: true,
    pagination: {
        el: '.events-slider__pagination',
        clickable: true,
    }
})