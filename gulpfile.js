'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const order = require('gulp-order');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

const configuration = require('./src/configuration');

gulp.task('package', ['pug', 'sass', 'scripts'], function () {

});

gulp.task('pug', function () {
    return gulp.src(configuration.paths.pug)
        .pipe(pug())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('sass', function () {
   return gulp.src(configuration.paths.sass)
       .pipe(sass.sync().on('error', sass.logError))
       .pipe(gulp.dest('public/dist'));
});

gulp.task('scripts', function () {
    return gulp.src(configuration.paths.scripts)
        .pipe(order(["**/*.module.js", "**/*.js"]))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/dist'))
});

gulp.task('watch', function () {
    gulp.watch(configuration.paths.pug, ['pug']);
    gulp.watch(configuration.paths.sass, ['sass']);
    gulp.watch(configuration.paths.scripts, ['scripts']);
});

gulp.task('default', ['package', 'watch']);