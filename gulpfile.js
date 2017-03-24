const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const path = require('path');
const fs = require('fs');
const concat = require('gulp-concat');
const order = require('gulp-order');
const merge = require('merge-stream');

const configuration = require('./src/configuration');

const getFolders = function(dir){
    return fs.readdirSync(dir)
        .filter((file) => {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
};


gulp.task('package', () => {
    const folders = getFolders('src');
    const tasks = folders.map(function (folder) {
        return gulp.src([path.join('./src/', folder, '/**/*.js'), "!src/**/*-pkg.js"])
            .pipe(order(["**/*.module.js", "**/*.js"]))
            .pipe(concat(`${folder}-pkg.js`))
            .pipe(gulp.dest(path.join('public/js', folder)));
    });

    return merge(tasks);
});

gulp.task('pug', function () {
    return gulp.src(configuration.paths.pug)
        .pipe(pug())
        .pipe(gulp.dest('public/js/components'));
});

gulp.task('watch', function () {
    gulp.watch(configuration.paths.pug, ['pug']);
    gulp.watch('./src/**/*.js', ['package']);
});

gulp.task('default', ['package', 'pug', 'watch']);
gulp.task('dev', ['package']);