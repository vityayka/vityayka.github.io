$(function() {
    $('.ads-slider').jcarousel({
        wrap: 'circular',
        transitions: {
          transforms: true,
          easing: 'cubic-bezier(0.81,-0.26, 0.68, 0.19)'
        },
        animation: {
          duration: 800
        }
    });
    $('.ads-slider-prev').jcarouselControl({
        target: '-=2'
    });

    $('.ads-slider-next').jcarouselControl({
        target: '+=2'
    });
// AUTOSCROLL
    $('.ads-slider').jcarouselAutoscroll({
      interval: 3000,
      target: '+=2',
      autostart: true
    }); 

     $('.ads-slider-pagination')
       .on('jcarouselpagination:active', 'a', function() {
           $(this).addClass('isActive');
       })
       .on('jcarouselpagination:inactive', 'a', function() {
           $(this).removeClass('isActive');
       })
       .on('click', function(e) {
           e.preventDefault();
       })
       .jcarouselPagination({
           item: function(page) {
               return '<a href="#' + page + '"></a>';
           },
           'perPage': 3
       });

       // LANG SELECT

  $('.lang-select-content li a').click(function(e){
    e.preventDefault();
    var lang = $(this).html();

    if (lang == 'Русский') {
      lang = 'Russian';
    } else if (lang == 'Українська') {
      lang = 'Ukrainian';
    };

      $('.lang-select').removeClass('lang-select-English lang-select-Romana lang-select-Francais lang-select-Russian lang-select-Ukrainian');
      $('.lang-select').addClass('lang-select-' + lang);
  });

  $('.second-level-menu').click(function(){
    var positionTop = $(this).position().top;
    var currentID = $(this).attr('id');
    var currentHeight = $(this).height();
    var scrollOffset = $('.header-submenu').scrollTop();

    $('#container').toggleClass('second-level-menu_clicked');

    if ($(window).width() <= 480) {    
      $('.' + currentID).css('top', positionTop + currentHeight - scrollOffset);
    };

    $('.' + currentID).perfectScrollbar({
      suppressScrollX: true
    }); 

    $('.' + currentID).fadeToggle(100);
  });


  $('.header-sub-submenu').hover(function(){
    $('ul.header-submenu').addClass('header-submenu_opened');
  }, 
    function(){
      $('ul.header-submenu').removeClass('header-submenu_opened');
    })
  
  $('ul.header-menu').mouseleave(function(){
    $('.header-sub-submenu').fadeOut();
  });

    $('.header-submenu, #search-container ul, ul#categories-mon-reanim ').perfectScrollbar({
    suppressScrollX: true,
    wheelPropagation: false
  }); 

    $(window).scroll(function(){
    if ($(window).scrollTop() > 800) {
      $('#btn-gotop').fadeIn();
    } else {
      $('#btn-gotop').fadeOut();
    };
  });

  $('#btn-gotop').click(function(){
    $('body, html').animate({'scrollTop': 0}, 300);
  });

});

