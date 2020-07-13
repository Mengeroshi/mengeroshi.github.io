new Swiper('#about_me__gallery',{
    speed: 400,
    spaceBetween: 100,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    effect: "cube",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});

new Swiper('#lectures__gallery',{
    slidesPerView: 1,
    spaceBetween: 300,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});  