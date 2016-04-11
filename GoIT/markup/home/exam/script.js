$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
        wrap: 'circular'
    });
    // $('.jcarousel').jcarousel('scroll', '+=1');

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    $('.jcarousel').jcarouselAutoscroll({
      interval: 1000,
      target: '+=1',
      autostart: true
  });
     $('.jcarousel-pagination')
       .on('jcarouselpagination:active', 'a', function() {
           $(this).addClass('active');
       })
       .on('jcarouselpagination:inactive', 'a', function() {
           $(this).removeClass('active');
       })
       .on('click', function(e) {
           e.preventDefault();
       })
       .jcarouselPagination({
           item: function(page) {
               return '<a href="#' + page + '">' + page + '</a>';
           }
       });
});