$(function() {
  var menu = $('#menu'),
    hover = 0;
  $('.menu').height($(document).height());
  menu.click(function() {
    if (hover === 0) {
      hover = 1;
      $('.wrapper').css({
        '-moz-transform': 'translate3d(50%, 0, 0)',
        '-webkit-transform': 'translate3d(50%, 0, 0)',
        '-ms-transform': 'translate3d(50%, 0, 0)',
        '-o-transform': 'translate3d(50%, 0, 0)',
        'position': 'relative'
      });
    } else {
      hover = 0;
      $('.wrapper').css({
        '-moz-transform': 'translate3d(0, 0 ,0)',
        '-webkit-transform': 'translate3d(0, 0, 0)',
        '-ms-transform': 'translate3d(0, 0, 0)',
        '-o-transform': 'translate3d(0, 0, 0)',
        'position': 'relative'
      });
    }
  });
});