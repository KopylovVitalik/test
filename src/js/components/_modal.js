import {
  OPEN,
  ACTIVE,
  BODY,
  HTML,
  OVERFLOW_HIDDEN,
  ANIMATE
} from '../constants';

(() => {
  const controls = $('[data-modal-control]');
  const modals = $('[data-modal]');
  controls.each((i, control) => {
    control = $(control);
    const modal = modals.filter(
      `[data-modal="${control.data('modal-control')}"]`
    );

    control.on('click', e => {
      e.preventDefault();
      if (!control.hasClass(ACTIVE)) {
        modals.removeClass(OPEN);
        modal.addClass(OPEN);
        HTML.addClass(OVERFLOW_HIDDEN);
        controls.removeClass(ACTIVE);
        control.addClass(ACTIVE);
      } else {
        modal.removeClass(OPEN);
        control.removeClass(ACTIVE);
        HTML.removeClass(OVERFLOW_HIDDEN);
      }
    });
  });

  modals.each((i, modal) => {
    modal = $(modal);
    const inner = modal.find('[data-modal-container]');
    const close = modal.find('[data-modal-close]');

    const hide = () => {
      modal.removeClass(OPEN);
      controls.removeClass(ACTIVE);
      HTML.removeClass(OVERFLOW_HIDDEN);
    };

    BODY.on('click', e => {
      if (
        $(e.target).closest(inner).length ||
        $(e.target).closest(controls).length
      )
        return;
      hide();
    });
  });
})();
