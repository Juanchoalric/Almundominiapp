const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

const configuration = require('./src/configuration');

gulp.task('pug', function () {
    return gulp.src(configuration.paths.pug)
        .pipe(pug())
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', []);