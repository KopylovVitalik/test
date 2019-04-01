var gulp = require('gulp'),
  	spritesmith = require('gulp.spritesmith'),
		config = require('../config');

gulp.task('sprite:png', function() {
  var spriteData = gulp.src(['src/icons/*.png']).pipe(
    spritesmith({
      imgName: 'sprite.png',
      cssName: '_sprite.sass',
      imgPath: '../img/sprite.png',
      cssFormat: 'sass',
      padding: 16
    })
  );
  var imgStream = spriteData.img.pipe(gulp.dest('build/img/'));
  var cssStream = spriteData.css.pipe(gulp.dest('src/sass/components/'));
  return imgStream, cssStream;
});

gulp.task('sprite:png:watch', function() {
  gulp.watch(config.src.iconsPng + '/*.png', ['sprite:png']);
});
