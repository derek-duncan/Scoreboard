$(function() {
    var menu = $('#menu'),
        hover = 0;
    $('.menu').height($(document).height());
    menu.click(function() {
        if(hover === 0) {
            hover = 1;
            $('.wrapper').css({'-moz-transform':'translateX(50%)', '-webkit-transform':'translateX(50%)', 'position':'relative'});
        }
        else {
            hover = 0;
            $('.wrapper').css({'-moz-transform':'translateX(0)', '-webkit-transform':'translateX(0)', 'position':'relative'});
        }
    });
});