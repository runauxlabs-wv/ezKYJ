jQuery(document).ready(function(){
    // Header&Navigation
    $(".gnb li").mouseover(function(){
        $(this).find(".depth-two").stop().slideDown(500);
    });
    $(".gnb li").mouseout(function(){
        $(this).find(".depth-two").stop().slideUp(500);
    });

    // Facilites
    $(".facilites .contents-area > div").mouseover(function(){
        $(this).children(".facilites .event-button").addClass("active")
    });
    $(".facilites .contents-area > div").mouseout(function(){
        $(this).children(".facilites .event-button").removeClass("active");
    });

    // Datepicker
    $( function() {
        $( "#datepicker1" ).datepicker({

        });
    });

    $( function() {
        $( "#datepicker2" ).datepicker({
    
        });
    });
});


// Main
var swiper1 = new Swiper(".mySwiper-main", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Event
var swiper2 = new Swiper(".mySwiper-event", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Package
var swiper3 = new Swiper(".mySwiper-package", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Travel
var swiper4 = new Swiper(".mySwiper-thumbs", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
var swiper5 = new Swiper(".mySwiper-gallery", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    thumbs: {
        swiper: swiper4,
    },
});

// Notice
var swiper6 = new Swiper(".mySwiper-notice", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2500,
    //   disableOnInteraction: false,
    }
  });