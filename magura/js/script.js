$(function() {
    // SLIDERS CONFIGURATION
    $('.slider-jcarousel').jcarousel({
        // Configuration goes here
        wrap: 'circular',
        center:'true',
        animation: {
          duration: 1000,
          easing: 'easeInOutCirc'
        }

    })
    .jcarouselAutoscroll({
      interval: 5000,
      target: '+=1',
      autostart: true
  });
            var reviewsWidth = $(".reviews-wrapper").css('width');

        $(".reviews-wrapper").jcarousel('items').css('width', reviewsWidth);


    $(window).resize(function(){
    	$('.slider-jcarousel').jcarousel('reload', {animation: 'slow' });
        var bodyWidth = $('body').css('width');
        
        if (parseInt(bodyWidth) > 1366) {
          $(".slider-jcarousel").jcarousel('items').css('width', bodyWidth);

        } else{
            // $(".slider-jcarousel").jcarousel('items').css('width', '');
        };

        //Second slider
        var reviewsWidth = $(".reviews-wrapper").css('width');
        $(".reviews-wrapper").jcarousel('items').css('width', reviewsWidth);
        
    });

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
    $('.header-menu-show').click(function(){
    
      if ($('.header-menu').css('display') == 'none') {;
        $('.header-menu').css('display','inline-block');
        $('.slider').css('opacity','0');
        $('.slider').css('height','0');
        $('.book-popup').css('display', 'none');
      } else{
    	 $('.header-menu').css('display','none');
    	 $('.slider').css('opacity','1');
    	 $('.slider').css('height','100%');
        }
    });

        //Calendar config
    $( ".calendar__arriving .datepicker" ).datepicker({
        onSelect: function ArriveDate(date){
            var converted = $.datepicker.formatDate("d", new Date(date));
            var month = $.datepicker.formatDate("MM", new Date(date));

            $(".calendar__arriving .calendar-slider").html(converted);
            $(".calendar__arriving .calendar-month").html(month);

            // console.log(new Date(date));
            var arrDate = $(this).datepicker("getDate");

            // console.log(this);

            console.log(arrDate);

            return arrDate;
        },
        showOtherMonths: true,
        maxDate: "+1y",
        minDate: "0",
    });
     $( ".calendar__departing .datepicker" ).datepicker({
        onSelect: function(date){
            var converted = $.datepicker.formatDate("d", new Date(date));
            var month = $.datepicker.formatDate("MM", new Date(date));

            $(".calendar__departing .calendar-slider").html(converted);
            $(".calendar__departing .calendar-month").html(month);

            console.log($(".calendar__arriving .datepicker").datepicker("getDate"));


        },
        showOtherMonths: true,
        maxDate: "+1y",
        minDate: new Date($(".calendar__arriving .datepicker").datepicker("getDate"))
    });

    $(".calendar__guests .calendar-arrow-right").click(function(){
      var guests = $(".calendar__guests .calendar-slider").html();
        
        guests++;
        
        $(".calendar__guests .calendar-slider").html(guests);
    });

    $(".calendar__guests .calendar-arrow-left").click(function(){
      
      var guests = $(".calendar__guests .calendar-slider").html();
      
      if (guests > 1) {
        
        guests--;
       
       };

      $(".calendar__guests .calendar-slider").html(guests);
    });

    $(".header-booking-button, .hotel-rest-book").click(function(e){
      e.preventDefault();
      // $(".book-popup").css('display','block');
      $(".book-popup").slideToggle(100);
      
      if($(window).width() < 768){
        $(".header-menu").slideToggle();
      }
      if ($(window).width() > 768) {
        if(!$("body").find("#TB_overlay").is("div")) {
          $("body").append("<div id='TB_overlay'></div>");
         }
      }
    });

    $(".book-cross").click(function(){
      $(".book-popup").css('display','none');        
      $("#TB_overlay").remove();
    })

    $( ".book-a-room .datepicker" ).datepicker({
      showOtherMonths: true,
      maxDate: "+1y",
      minDate: "0",
    });    
});