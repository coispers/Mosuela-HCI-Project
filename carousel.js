var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  loop:true,
  autoplay:{
    delay: 1000,
    disableOnInteraction: false,
  }
});

var swiper = new Swiper(".swiper-reviews", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  loop:true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
//depends on screen resolution
  breakpoints:{
    320: {
      slidesPerView:1,
    },
    640:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
    },
  }
});