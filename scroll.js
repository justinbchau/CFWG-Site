$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('#mainNavbar').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('nav').addClass('solid-nav');
        } else {
            $('nav').removeClass('solid-nav');
        }

    });
});