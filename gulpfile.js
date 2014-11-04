var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass')
var assemble = require('gulp-assemble');

var assembleOptions = {
  data: 'src/data.json',
  partials: 'src/templates/partials/*.hbs',
  layout: 'src/templates/index.hbs',
  helpers: 'src/templates/helpers.js'
};


gulp.task('default', ['build'])

gulp.task('build', function () {
  gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/styles'));

  gulp.src('src/templates/*.hbs')
    .pipe(assemble(assembleOptions))
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});
