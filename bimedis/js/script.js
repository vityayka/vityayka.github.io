$(function() {
    $('.ads-slider').jcarousel({
        wrap: 'circular',
        transitions: {
          transforms: true
        }
    });
    $('.ads-slider-prev').jcarouselControl({
        target: '-=2'
    });

    $('.ads-slider-next').jcarouselControl({
        target: '+=2'
    });

    // $('.ads-slider').jcarouselAutoscroll({
      // interval: 3000,
      // target: '+=2',
      // autostart: true
    // }); 

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
           }
       });
});