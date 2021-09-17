$(document).ready(function(){
    $("nav ul li").each(function() {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function() {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
        });
    });
    $("nav button:first-of-type").click(function(){
        $("nav ul").addClass("on");
        $("nav button:first-of-type").css({"display": "none",});
        $("nav button:first-of-type img").css({"display": "none",});
        $("nav button:last-of-type").css({"display": "block",});
        $("nav button:last-of-type img").css({"display": "block",});
    });

    $("nav button:last-of-type").click(function(){
        $("nav ul.on").removeClass("on");
        $("nav button:first-of-type").css({"display": "block",});
        $("nav button:first-of-type img").css({"display": "block",});
        $("nav button:last-of-type").css({"display": "none",});
        $("nav button:last-of-type img").css({"display": "none",});
    });
});