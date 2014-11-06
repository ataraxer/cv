var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var assemble = require('gulp-assemble');
var bower = require('gulp-bower');
var rename = require('gulp-rename');
var remarkable = require('gulp-remarkable');
var clean = require('gulp-clean');

var assembleOptions = {
  data: 'src/data.json',
  partials: [
    'src/templates/partials/*.hbs',
    'tmp/templates/partials/*.hbs',
  ],
  layout: 'src/templates/index.hbs',
  helpers: 'src/templates/helpers.js',
};

var cleanOptions = {
  read: false,
  force: true,
};

var pureFiles = [
  'bower_components/pure/pure-min.css',
  'bower_components/pure/grids-responsive-min.css',
];



gulp.task('default', ['build']);


gulp.task('build', ['prepare'], function () {
  bower();

  gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/styles'));

  gulp.src(pureFiles)
    .pipe(gulp.dest('build/styles'));

  gulp.src('src/templates/*.hbs')
    .pipe(assemble(assembleOptions))
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));

  return gulp.src('tmp/', cleanOptions)
    .pipe(clean());
});


gulp.task('prepare', ['clean'], function() {
  return gulp.src('src/content/*.md')
    .pipe(remarkable())
    .pipe(rename({ extname: '.hbs' }))
    .pipe(gulp.dest('tmp/templates/partials/'));
});


gulp.task('clean', function () {
  return gulp.src(['build/', 'tmp/'], cleanOptions)
    .pipe(clean());
});

