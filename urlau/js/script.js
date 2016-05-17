$(function() {
    // SLIDERS CONFIGURATION
    // $('.jcarousel').jcarousel({
        //Configuration goes here
        // wrap: 'circular',
        // center: 'true',
        // animation: {
          // duration: 1000,
          // easing: 'ease-in-out'
        // },
        // transitions: {
        	// transforms: true,
          // easing: 'ease-in-out'
        // }
    // })
    var jcarousel = $('.jcarousel');

    jcarousel.jcarousel({
        animation: {
            duration: 200 // make changing image immediately
        },
        wrap: 'circular',
          transitions: {
            transforms: true,
            easing: 'step-end'
          }
    })
    .jcarouselAutoscroll({
      interval: 6000,
      target: '+=1',
      autostart: true
    });

    // make fadeIn effect
    jcarousel.on('jcarousel:animate', function (event, carousel) {
      $(carousel._element.context).find('.slider-holder-item').fadeOut(200);
    });

    jcarousel.on('jcarousel:animateend', function (event, carousel) {
      $(carousel._element.context).find('.slider-holder-item').fadeIn(500);
    });

     $('.slider-left').jcarouselControl({
        target: '-=1'
    });

    $('.slider-right').jcarouselControl({
        target: '+=1'
    });

    //Header menu 768px
  
});