var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');


gulp.task('default', ['build'])

gulp.task('build', function () {
  gulp.src('src/styles/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/styles'));

  gulp.src('src/content/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build'));
});
