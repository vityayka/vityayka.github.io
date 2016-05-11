$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
        wrap: 'circular',
        transitions: {
          transforms: true
        }
    });
    // $('.jcarousel').jcarousel('scroll', '+=1');

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    // $('.jcarousel').jcarouselAutoscroll({
      // interval: 5000,
      // target: '+=1',
      // autostart: true
  // });
     $('.jcarousel-pagination')
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