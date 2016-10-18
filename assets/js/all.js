$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $(".navbar.scroll").addClass("move");
        } else {
            $(".navbar.scroll.move").removeClass("move");
        }
    });
});