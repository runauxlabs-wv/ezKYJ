$(document).ready(function(){
    $(".swiper.mySwiper nav img").click(function(){
        $(".swiper.mySwiper nav").css
    });

    $(".swiper.mySwiper nav").click(function(){
      $(this).addClass("on").siblings().removeClass("on");
    });
    $(".swiper.mySwiper nav.").click(function(){
      $(this).addClass("on").siblings().removeClass("on");
    });
});
var swiper = new Swiper(".mySwiper-one", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var swiper = new Swiper(".mySwiper-two", {
  slidesPerView: 1,
  spaceBetween: 0,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true,
});