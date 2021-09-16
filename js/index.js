$(document).ready(function(){
    $("nav ul li").each(function() {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function() {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
        });
    });
});