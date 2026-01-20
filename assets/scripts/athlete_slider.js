var athleteSwiper = new Swiper(".brands-athlete-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
      // Disable touch control for larger screens
      // allowTouchMove: false,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
