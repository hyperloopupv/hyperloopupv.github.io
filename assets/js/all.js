$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $(".navbar.scroll").addClass("move");
        } else {
            $(".navbar.scroll.move").removeClass("move");
        }
    });

    $(window).resize(function () {
        if ($(window).width() < 920) {
            $(".navbar.scroll").addClass("move");
        } else {
            $(".navbar.scroll.move").removeClass("move");
        }
    });
    
    $(".menu").on("click", function () {
        if ($(".navbar").hasClass("open")) {
            $(".navbar").removeClass("open");
        } else {
            $(".navbar").addClass("open");
        }
    });
    
});