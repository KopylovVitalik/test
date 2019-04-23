const root = document.documentElement;
const titleColorCustomizer = document.querySelector('.js-title-color-customizer');

themeBtns.forEach(btn => {
  btn.addEventListener('click', handleThemeUpdate);
});
