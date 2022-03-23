$(document).ready(function(){
    $(".gnb li").each(function (){
        var thisOffset = $("." + $(this).data("id")).offset().top;

        $(this).click(function(){
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
        });
    });

    $("nav button:first-of-type").click(function(){
        $("nav .gnb").addClass("on");
        $("nav button:first-of-type").css({"display": "none",});
        $("nav button:last-of-type").css({"display": "block",});
    });

    $("nav button:last-of-type").click(function(){
        $("nav .gnb.on").removeClass("on");
        $("nav button:first-of-type").css({"display": "block",});
        $("nav button:last-of-type").css({"display": "none",});
    });
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});