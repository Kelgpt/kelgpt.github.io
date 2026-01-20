document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".hero-image-container", {
    // Swiper settings
    loop: true, // Loop through slides
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "slide", // Or you can use 'fade' for a fade effect
    speed: 500,

    // autoplay: {
    //   delay: 5000,
    // },
  });
});
