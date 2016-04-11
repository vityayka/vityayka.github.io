$(function() {
    $('.slider-jcarousel').jcarousel({
        // Configuration goes here
        wrap: 'circular',
        center:'true'

    });
    $('.slider-jcarousel').on('jcarousel:reload jcarousel:create window:resize', function () {
    	var carousel = $(this),
        bodyWidth = $('body').css('width');
        carousel.jcarousel('items').css('width', bodyWidth);
    });
    $(window).resize(function(){
    	$('.slider-jcarousel').jcarousel('reload', {animation: 'slow' });
        console.log('resized');
    });
    // $('.slider-jcarousel').jcarouselAutoscroll({
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
    $('.header-menu-show').on('click',function(){
    
      if ($('.header-menu').css('display') == 'none') {;
        $('.header-menu').css('display','inline-block');
        $('.slider').css('opacity','0');
        $('.slider').css('height','0');
    }else{
    	 $('.header-menu').css('display','none');
    	 $('.slider').css('opacity','1');
    	 $('.slider').css('height','100%');
    }
    });
});