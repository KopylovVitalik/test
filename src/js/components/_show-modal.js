import {
  OPEN
} from '../constants';

const form = $('.js-form');
const modal = $('[data-modal="success-modal"]');

form.on('submit', e => {
  e.preventDefault();
  setTimeout(() => modal.addClass(OPEN), 500);
});
