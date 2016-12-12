var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('./app/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', function() {
  return gulp.src('./app/**/*.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['scripts', 'styles'])
