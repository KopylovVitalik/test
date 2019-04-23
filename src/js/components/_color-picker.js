import Pickr from '@simonwep/pickr/dist/pickr.es5.min';

// export const pickr = selector => Pickr.create({
//   el: selector,
//   useAsButton: true,
//   components: {

//     // Main components
//     // preview: true,
//     opacity: true,
//     hue: true,

//     // Input / output Options
//     interaction: {
//       hex: true,
//       //   rgba: true,
//       //   hsla: true,
//       //   hsva: true,
//       //   cmyk: true,
//       input: true,
//       //   clear: true,
//       save: true
//     }
//   }
// });
const logo = document.querySelector('.footer__logo');

[...document.querySelectorAll('.color-picker')].forEach(selector => {
  let pickr = Pickr.create({
    el: selector,
    useAsButton: true,
    inline: true,
    components: {

      // Main components
      // preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
        hex: true,
        rgba: true,
        //   hsla: true,
        //   hsva: true,
        //   cmyk: true,
        input: true,
        //   clear: true,
        save: true
      }
    }
  }
  );
  pickr.show();
  pickr.on('save', hsva => {
    const selectedColor = hsva.toRGBA().toString();
    logo.style.color = selectedColor;
  });
});

