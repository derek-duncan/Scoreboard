function global() {
    var p = $('.p-content');
    var o = $('.option');
    var window = $(document).innerWidth();
    $('.p-points').height($(document).height());
    p.height($(document).innerWidth());
    $('.option').each(function() {
        $(this).css({'height': window / 2, 'width': window / 2});
    });

    $('.p-content').each(function(e, f) {
        if ($(this).find('.option').length == 2){
            $('.p-content').eq(e).find('.option').each(function(e, f){
                $(this).css({'height': window, 'width': window / 2});
            });
        }
        else if ($(this).find('.option').length > 4){
            var len = $(this).find('.option').length;
            if (len % 2 !== 0) {
                $(this).find('.p-wrap').append('<div class="option"></div>');
            }
            $('.p-content').eq(e).find('.option').each(function(e, f){
                $(this).css({'height': window / len * 2, 'width': window / 2});
            });
        }
        $(this).css({'top':'50%', 'margin-top': - p.height() / 2});
    });
}
function fadein(x) {
    x.fadeIn(200, function() {
        x.css({'display': 'block'});
    });
}
function fadeout(x) {
    x.fadeOut(200, function() {
        x.css({'display': 'none'});
    });
}
$(function() {
    global();
    var hover = 0;
    var body = $('body, html');
    $('.arrow1').click(function() {
        // Arrow Button
        var e = $('.arrow1').index(this);
        // Disable Vertical Scrolling
        body.css({'overflow': 'hidden', 'height':'100%'});
        // Fade in overlay background
        fadein($('.p-points'));
        // Fade in overlay content
        fadein($('.p-content').eq(e));
        hover = 1;
        if (hover == 1) {
            $('.p-points').click(function() {
                body.css('overflow', 'auto');
                fadeout($('.p-content'));
                fadeout($('.p-points'));
                hover = 0;
            });
        }
    });
});
$(window).resize(function() {
    // global();
});