var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass')


gulp.task('default', ['build'])

gulp.task('build', function () {
  gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/styles'));

  gulp.src('src/content/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build'));
});
