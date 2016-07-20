var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint')
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('connect', function() {
  connect.server({
    port: 8000,
    fallback: 'app/index.html',
    livereload: true
  });
});

gulp.task('sass', function() {
  return gulp.src('app/assets/_scss/**/**.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('app/static/css'))
});

gulp.task('lint', function() {
  return gulp.src('app/assets/_js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

gulp.task('scripts', function() {
  return browserify('app/assets/_js/index.js')
    .bundle()
    .pipe(source('scripts.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('app/static/js'))
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/assets/_js/*.js', ['lint', 'scripts']).on('change', livereload.changed);
  gulp.watch('app/assets/_scss/*.scss', ['sass']).on('change', livereload.changed);
  gulp.watch('app/*.html').on('change', livereload.changed);
})

gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'connect']);
