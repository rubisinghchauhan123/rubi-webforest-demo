jQuery(document).ready(function () {
    jQuery(".menu").click(function () {
        jQuery("html").addClass("show-menu");
    });
    jQuery(".close-button").click(function () {
        jQuery("html").removeClass("show-menu");
    });
    jQuery(window).scroll(function () {
        var sticky = jQuery('#header'),
            scroll = jQuery(window).scrollTop();
        if (scroll >= 80) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});
