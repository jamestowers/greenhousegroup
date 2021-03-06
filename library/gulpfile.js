var gulp = require('gulp');
    concat = require('gulp-concat');
    sass = require('gulp-sass');
    prefix = require('gulp-autoprefixer');
    coffee = require('gulp-coffee');
    sourcemaps = require('gulp-sourcemaps');
    notify = require("gulp-notify");
    browserSync = require('browser-sync').create();
    reload = browserSync.reload;

gulp.task('sass', function () {
  gulp.src('./scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
      .on('error', notify.onError(function (error) {
        return error;
      }))
    .pipe(prefix("last 4 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(sourcemaps.write('../sourcemaps'))
    .pipe(gulp.dest('./css'));
});

gulp.task('coffee', function () {
  gulp.src('./coffee/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .on('error', notify.onError(function (error) {
      return error;
    }))
    .pipe(sourcemaps.write('../sourcemaps'))
    .pipe(gulp.dest('./js'));
});

gulp.task('concat-js', ['coffee'], function() {
  return gulp.src([
        './js/vendor/modernizr.custom.min.js', 
        './js/vendor/jquery.2.1.4.js', 
        './js/vendor/fastclick.js', 
        './js/vendor/imagesloaded.pkgd.min.js', 
        './js/vendor/picturefill.min.js', 
        './js/dropshop.js', 
        './js/scripts.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});
 
//Watch task
gulp.task('default',function() {
    browserSync.init({
        host: "localhost:3000",
        proxy: "ghg.dev",
        browser: "firefoxdeveloperedition"
    });
    gulp.watch('./scss/**/*.scss',['sass']).on("change", reload);
    gulp.watch('./coffee/**/*.coffee',['concat-js']);
    gulp.watch("../**/*.php").on("change", reload);
});