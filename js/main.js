$(document).ready(function () {
    
    $(".menu-link").on("click", function(e) {
    $(".menu-link").toggleClass("active");
    $("#menu").toggleClass("active");
    e.preventDefault();
    });
    
    /* remove all styles from the macros */
    $(".page-content div" ).removeAttr( "style" );
    
    /* add display none to the page info panles */
    $("div .sp-content-info" ).attr( "style", "display: none" );
    
    });
