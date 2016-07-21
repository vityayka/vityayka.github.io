(function( $ ){

$(function() {

  $('.login-form').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
        btn = form.find('.login-btn');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('.required').addClass('error_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.required').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).removeClass('error_field');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).addClass('error_field');
        }
        //Проверка поля по регулярке
      var loginVal = $('#login').val();
      var regex = /^[a-z0-9_'-\s]+$/i;
      if (loginVal.search(regex) !== 0) {
        $('#login').addClass('error_field');
      };
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.error_field').css({'border-color':'#bf0c00'});
      form.find('.error_field').parent().css({'color':'#bf0c00'});
      setTimeout(function(){
        form.find('.error_field').removeAttr('style');
        form.find('.error_field').parent().removeAttr('style');
      },1000);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.error_field').length;
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        form.submit();
      }
    });
  });
});

})( jQuery );