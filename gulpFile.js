const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const babel = require('gulp-babel');

gulp.task('js', () => {
  gulp.src('src/game.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest(''))
});

gulp.task('sass', () => {
  sass('src/game.sass')
  .pipe(gulp.dest(''));
});

gulp.task('watch', () => {
  gulp.watch('src/game.js', ['js']);
  gulp.watch('src/game.sass', ['sass']);
});

gulp.task('default', ['js', 'sass', 'watch']);
