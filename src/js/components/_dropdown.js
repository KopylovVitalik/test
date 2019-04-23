import { OPEN, BODY, INIT } from '../constants';
import { pickr } from './_color-picker';

var dd = $('.js-dropdown-btn');
dd.on('click', function() {
  const parent = $(this).parents('.js-dropdown-container');
  parent.toggleClass(OPEN);

//   const pickerEl = parent.find('.color-picker')[0];
//   var colorPicker;

//   if (!parent.hasClass(INIT)) {
//     colorPicker = pickr(pickerEl).show();
//     parent.addClass(INIT);
//   }
});
