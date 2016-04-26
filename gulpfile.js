"use strict";

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var args = require('yargs').argv;
var shell = require('gulp-shell');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

console.log('--------------------');
var IS_DEBUG = !!args.debug;
console.log('IS_DEBUG: ', IS_DEBUG);
var TPL_FILE_INFO = 'echo "> (DEBUG ' + (IS_DEBUG ? 'on' : 'off') + ') <%= file.path %>"';


gulp.task('hexo', function () {
    shell('cd ../../ && hexo s');
});

gulp.task('css', function () {
    gulp.src('./source/lib/markdown-theme/*.css')
        .pipe(shell(TPL_FILE_INFO))
        .pipe(concat('markdown.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./source/css'))
        .pipe(shell(TPL_FILE_INFO));
});

//gulp.task('concatJS', ['browserify'], function () {
//    gulp.src('./source/js/temp/*.js')
//        .pipe(shell(TPL_FILE_INFO))
//        .pipe(rename('post_entry.min.js'))
//        .pipe(gulp.dest('./source/js/build'))
//        .pipe(shell(TPL_FILE_INFO))
//});

gulp.task('browserify', function () {
    gulp.src(['./source/js/src/post_entry.js',
        './source/js/src/index_entry.js'])
        .pipe(browserify({
            insertGlobals: true
        }))
        .on('error', function(err){
            console.log(err);
        })
        .pipe(rename({
            suffix: '.min'
        }))
        //.pipe(gulp.dest('./source/js/temp'))
        .pipe(gulp.dest('./source/js/build'))
        .pipe(shell(TPL_FILE_INFO));
});

gulp.task('watch', function () {
    console.log("Start to watch");
    gulp.watch('./source/lib/markdown-theme/*.css', ['css']);
    gulp.watch(['./source/js/src/*.js', './source/js/src/lib/*.js'], ['browserify']);
});

gulp.task('uglify',function () {
   gulp.src('./source/js/build/*.js')
       .pipe(uglify())
       .pipe(gulp.dest('./source/js/build/'));
});

gulp.task('build',function () {
    gulp.src('./source/js/build/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./source/js/build/'));
});