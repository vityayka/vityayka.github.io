(function($) {
    // This is the connector function.
    // It connects one item from the navigation carousel to one item from the
    // stage carousel.
    // The default behaviour is, to connect items with the same index from both
    // carousels. This might _not_ work with circular carousels!
    var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };

    $(function() {
        // Setup the carousels. Adjust the options for both carousels here.
        var carouselStage      = $('.gallery').jcarousel({
                                    wrap: 'first',
                                    transitions: {
                                      transforms: true,
                                      easing: 'ease-in-out'
                                    },
                                    animation: {
                                      duration: 1000
                                    }
        });
        //RESPONSIVE CAROUSEL
        carouselStage.on('jcarousel:reload jcarousel:create', function () {
        var carousel = $(this),
          width = window.innerWidth;

            if (width < 480) {
                // width = width / 3;
                carousel.jcarousel('items').css('width', Math.ceil(width - 17) + 'px');
            }
            });
        var carouselNavigation = $('.gallery-nav').jcarousel();

        //AUTOSCROLL
        $('.gallery').jcarouselAutoscroll({
          interval: 5000,
          target: '+=1',
          autostart: true
        }); 

        // We loop through the items of the navigation carousel and set it up
        // as a control for an item from the stage carousel.
        carouselNavigation.jcarousel('items').each(function() {
            var item = $(this);

            // This is where we actually connect to items.
            var target = connector(item, carouselStage);

            item
                .on('jcarouselcontrol:active', function() {
                    carouselNavigation.jcarousel('scrollIntoView', this);
                    item.addClass('active');
                })
                .on('jcarouselcontrol:inactive', function() {
                    item.removeClass('active');
                })
                .jcarouselControl({
                    target: target,
                    carousel: carouselStage
                });
        });

        // Setup controls for the stage carousel
        $('.prev-stage')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.next-stage')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        // Setup controls for the navigation carousel
        $('.prev-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.next-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

    //Setup reviews slider
    var reviewsSlider = $('.reviews-slider');

    reviewsSlider
      // .on('jcarousel:reload jcarousel:create', function () {
      //   var carousel = $(this),
      //     width = carousel.innerWidth();

      //       if (width < 970) {
      //           // width = width / 3;
      //           carousel.jcarousel('items').css('width', Math.ceil(width - 40) + 'px');
      //       }
      //       })

      .jcarousel({
          wrap: 'circular',
          transitions: {
            transforms: true,
            easing: 'ease-in-out'
          },
          animation: {
            duration: 1000
          },
          canter: true
      });
    // $('.reviews-slider').jcarouselAutoscroll({
    //       interval: 5000,
    //       target: '+=1',
    //       autostart: true
    //     }); 

    $('.reviews-prev-btn').jcarouselControl({
        target: '-=1'
    });

    $('.reviews-next-btn').jcarouselControl({
        target: '+=1'
    });

    //Sticky header setup
    $(window).scroll(function(){
      if($(window).scrollTop() > 70 && window.innerWidth > 768) {
        $('.sticky-header').addClass('sticky-header--fixed');
      } 
        else {
          $('.sticky-header').removeClass('sticky-header--fixed');
        }
    });

    //Gallery setup
    $('.gallery__item').magnificPopup({
       delegate: 'a',
      type: 'image',
      gallery:{
        enabled: true
      }
    });

});

})(jQuery);