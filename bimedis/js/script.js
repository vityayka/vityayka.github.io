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