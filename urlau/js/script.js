$(function() {
    // SLIDERS CONFIGURATION
    $('.jcarousel').jcarousel({
        // Configuration goes here
        wrap: 'circular',
        center: 'true',
        animation: {
          duration: 1000,
          easing: 'ease-in-out'
        },
        transitions: {
        	transforms: true,
          easing: 'ease-in-out'
        }
    })

    // .jcarouselAutoscroll({
      // interval: 1000,
      // target: '+=1',
      // autostart: true
  	// });


     $('.slider-prev').jcarouselControl({
        target: '-=1'
    });

    $('.slider-next').jcarouselControl({
        target: '+=1'
    });
     $('.reviews-arrows-left').jcarouselControl({
        target: '-=1'
    });

    $('.reviews-arrows-right').jcarouselControl({
        target: '+=1'
    });

    //Header menu 768px
  
});