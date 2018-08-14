var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify-es').default;


gulp.task('deleteDocsFolder', function() {
    return del('./docs');
});

gulp.task('optimizeImages', ['deleteDocsFolder'], function() {
    return gulp.src(['./app/images/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./docs/images'));
});

gulp.task('usemin', ['deleteDocsFolder'], function() {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [function() { return rev() }, function() { return cssnano() }],
            js: [function() { return rev() }, function() { return uglify() }]
        }))
        .pipe(gulp.dest('./docs'));
});


gulp.task('build', ['deleteDocsFolder', 'optimizeImages', 'usemin']);
