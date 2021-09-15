$(document).ready(function(){
  $("nav .mobile-menu").click(function(){
    $("nav ul").addClass("on");
    $("nav .mobile-menu").css({"display": "none",});
    $("nav .clear").css({"display": "block",});
  });

  $("nav .clear").click(function(){
    $("nav ul").removeClass("on");
    $("nav .mobile-menu").css({"display": "block",});
    $("nav .clear").css({"display": "none",});
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