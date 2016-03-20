$(function(){

	var $input = $('input');

	$input.hover(function(){
	  var $tooltip = $($(this).attr('name'));
	  $tooltip.addClass('visible');
	}, 
	    function(){
	      var $tooltip = $($(this).attr('name'));
	      $tooltip.removeClass('visible');

	   }
	);

	var $button = $('button');

	$button.on('click', function(){
	  var $tooltips = $('.tooltip');
	  $tooltips.addClass('visible');
	  });
})