$(function(){

var $links = $('a');


$links.on('click', function(e) {
  var $link_text = $($(this).attr('href'));

  e.preventDefault();

  $link_text.siblings('div').removeClass('textbox-visible');
  $link_text.addClass('textbox-visible');
  $(this).parent().addClass('tab_active');
  $(this).parent().siblings().removeClass('tab_active');
  console.log($('.tab_active'));

})
// $('.tab_active').siblings().hover(function() {
// 	console.log($('.tab_active'));
// 	$(this).css('background', '#ccc');
// 	$(this).css('border', '1px solid gray');
// 	$(this).css('border-bottom', 'none');

// }, function() {
// 	$(this).css('background', '#ddd');
// 	$(this).css('border', '1px solid #aaa');
// 	$(this).css('border-bottom', 'none');

// })

});