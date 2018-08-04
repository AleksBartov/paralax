const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function() {

    browserSync.init({
      notify: false,
      server: {
        baseDir: "docs"
      }
    });
  
    watch('./docs/index.html', function() {
      browserSync.reload();
    });
  
    watch('./docs/styles/**/*.css', function() {
      gulp.start('cssInject');
    });
  
  });
  
  gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./docs/temp/styles/main.css')
      .pipe(browserSync.stream());
  });
