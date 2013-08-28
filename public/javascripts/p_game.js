$.fn.popUpit = function(clickClass, mainClass, backgroundClass) {
  var pcont = $(mainClass),
    ppoint = $(backgroundClass),
    op = $('.option'),
    headerH = $('.header').innerHeight(),
    doc = $(document),
    docW = doc.innerWidth(),
    docH = doc.innerHeight(),
    win = $(window),
    winH = win.innerHeight(),
    winW = win.innerWidth(),
    scrollTop = win.scrollTop(),
    scrollLeft = win.scrollLeft(),
    hover = 0,
    body = $('body, html');
  body.css('min-width', docW);
  $(window).on('scroll', function() {
    scrollTop = win.scrollTop();
  });
  ppoint.css({
    height: docH,
    window: "100%"
  });
  this.on('click', function(index) {
    var dex = mainClass.eq(clickClass.index(this));
    var pheight = (docW < 500) ? docW : "300px",
      len = $(dex).find('.option').length;
    if (len == 2) {
      $(dex).find(op).each(function() {
        $(this).width(docW / 2);
        $(this).height(pheight);
      });
    } else if (len > 2 && len <= 9) {
      if (len % 2 === 0 && len <= 4) {
        $(dex).find(op).each(function() {
          $(this).width(docW / 2);
          $(this).height(pheight / 2);
        });
      } else if (len > 4) {
        $(dex).find(op).each(function() {
          $(this).width("33.399%");
          $(this).height(pheight / 2);
        });
      }
    }
    $(dex).height(pheight);
    $(dex).css({
      'top': '50%',
      'margin-top': (-(winH - pheight + headerH) / 2 + scrollTop)
    });

    body.css({
      'overflow-y': 'visible',
      'height': '100%'
    });
    fadein(backgroundClass);
    fadein(dex);
    hover = 1;
    if (hover == 1) {
      $(op).add(backgroundClass).click(function() {
        body.css('overflow-y', 'visible');
        fadeout($(mainClass));
        fadeout($(backgroundClass));
        hover = 0;
      });
    }
  });

  function fadein(x) {
    x.fadeIn(200, function() {
      x.css({
        'display': 'block'
      });
    });
  }

  function fadeout(x) {
    x.fadeOut(200, function() {
      x.css({
        'display': 'none'
      });
    });
  }
};
$(function() {
  $('.arrow1').popUpit($('.arrow1'), $('.p-content'), $('.p-points'));
});
$(window).resize(function() {
  body.css('min-width', $(document).innerWidth());
});