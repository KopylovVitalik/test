import validate from '../lib/jquery.form-validator.js';

var myLanguage = {
  badEmail: 'Вы ввели неправильный электронный адрес',
  badCustomVal: 'Ваш пароль недостатно надежен',
  requiredField: 'Обязательное поле'
};

$('.js-form').each((index, el) => {
  $.validate({
    form: $(el),
    validateOnEvent : true,
    language : myLanguage
  });
});
