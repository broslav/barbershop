
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('livereload', function() {
    gulp.src('app/*.*')
        .pipe(livereload());
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('app/*.*').on('change', livereload.changed);
});