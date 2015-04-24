(function (jQuery) {

    jQuery(document).ready(function () {
        var signin = $('a.viewport-login');
        var href = signin.attr('href');
        signin.attr('href', href+"?os_destination="+window.location.href);
    });

}(jQuery));
