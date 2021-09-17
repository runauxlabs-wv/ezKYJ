$(document).ready(function(){
    $("nav ul li").each(function() {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function() {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
        });
    });
    $("nav .menu").click(function(){
        $("nav ul").addClass("on");
        $("nav .menu").css({"display": "none",});
        $("nav .clear").css({"display": "block",});
    });

    $("nav .clear").click(function(){
        $("nav ul").removeClass("on");
        $("nav .menu").css({"display": "block",});
        $("nav .clear").css({"display": "none",});
    });
});