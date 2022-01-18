const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: '3',
    direction: 'horizontal',
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
    },
    autoplay: {
        delay: 800,
        disableOnInteraction: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
