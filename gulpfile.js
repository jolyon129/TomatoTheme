var gulp = require('gulp');
var uglify = require('gulp-uglify');
var exec = require('child_process').exec;

// gulp.task('minify', function () {
//   gulp.src('js/app.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('build'))
// });

gulp.task('watch', function() {
    gulp.watch('layout/*.swig', function() {
        console.log('I HEARED YOU');
    });
});

gulp.task('hexo', function() {
    exec('cd ../../ && hexo s');
});

gulp.task('copy',function() {

});


