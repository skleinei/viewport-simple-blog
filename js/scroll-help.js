
function navigationSetup(){

    $('.navigation-panel li:not(.active) > ul').hide();
    $('.navigation-panel li.current > ul').show();
    $('#mobile-navigation li:not(.active) > ul').hide();
    $('#mobile-navigation li.current > ul').show();

    $('.navigation-panel .pretitle').click(function(){
        $(this).siblings("ul").slideToggle();
        $(this).toggleClass("icon-angle-right icon-angle-down");
    }) 

     $('#mobile-navigation .posttitle').click(function(){
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass("icon-angle-up icon-angle-down");
     });

    $('#side-tree-bt').click(function () {
        $('#side-search-bt').removeClass("selected");
        $('#side-tree-bt').addClass("selected");
        $('#mobile-search-container').css('z-index','1');
    });

    $('#side-search-bt').click(function () {
        $('#side-tree-bt').removeClass("selected");
        $('#side-search-bt').addClass("selected");
        $('#mobile-search-container').css('z-index','100');
    });

}

function slideshowSetup() {

    $('.sp-slideshow').each(function (index) {

        var name = "pager-" + index;
        var pagerBot = $('<div></div>');
        $(pagerBot).addClass(name + " sp-pager");
        $(this).after($(pagerBot));
        $(this).attr("data-cycle-pager", "." + name)
            .attr("data-cycle-center-horz", "true")
            .attr("data-cycle-center-vert", "true")
            .attr("data-cycle-pause-on-hover", "true")
            .attr("data-cycle-swipe", "true")
            .cycle();
    });

    $('.sp-slideshow').click(function () {
        var paused = $('sp-slideshow').is('.cycle-paused');
        if (!paused) {
            $('sp-slideshow').cycle('resume');
        }else {
            $('sp-slideshow').cycle('pause');
        }
    });

}

function searchSetup() {
    $('#mobile-search').on('keyup', function () {
        if($("#mobile-search-input").val().length >= 3){
            $('#mobile-search-results').load($('#mobile-search').attr('action') + " #search-results", "q=" + $("#mobile-search-input").val());
        };
        $('#mobile-search-container').css('z-index','100');
        $('.mobile-search-close').css('visibility','visible');
    });

    $('#mobile-search').submit(function(event){
        event.preventDefault();
        $('#mobile-search-input').blur();
    });

    $('.mobile-search-close').click(function(){
        $('#mobile-search-input').blur();
        $('.mobile-search-close').css('visibility','hidden');
        $('#mobile-search-results').empty();
        $("#mobile-search-input").val("");
    })
}

$(document).ready(function () {

    $('.sp-slide').width($('.aui-page-panel-content').width()-60).css("display","block");
    $('.sp-slideshow').width($('.aui-page-panel-content').width()-60);

    $('#main-content .aui-group:first').css('margin-top','0');

    $( ".side-panel" ).on( "panelopen", function( event, ui ) {$('.ui-panel-dismiss').addClass('panel-open')} );
    $( ".side-panel" ).on( "panelbeforeclose", function( event, ui ) {$('.ui-panel-dismiss').removeClass('panel-open')} );

    $(window).resize(function () {

        if ($(window).innerWidth() >= 1024) {
            $('#mobile-panel').panel('close');
        }

        $('.sp-slide').width($('.aui-page-panel-content').width()-60)
        $('.sp-slideshow').width($('.aui-page-panel-content').width()-60)

    });

    $('div[data-role="content"],div[data-role="footer"]').wrapAll('<div class="ui-panel-wrapper"></div>')

    prettyPrint();
    slideshowSetup();
    searchSetup();
    navigationSetup();

});
