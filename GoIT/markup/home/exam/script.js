$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
        wrap: 'circular',
        transitions: {
          transforms: true
        }
    });
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
<<<<<<< HEAD
  //   $('.jcarousel').jcarouselAutoscroll({
  //     interval: 5000,
  //     target: '+=1',
  //     autostart: true
  // }); 
=======
     $('.jcarousel').jcarouselAutoscroll({
       interval: 5000,
       target: '+=1',
       autostart: true
   });
>>>>>>> 933201a7a9c2466f8e84b47f172bac36fbd11e9c
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
