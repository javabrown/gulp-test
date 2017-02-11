var gulp = require('gulp'),
    shell = require('gulp-shell'),
    exit = require('gulp-exit'),
    typescript = require('gulp-tsc');
 
function errorLog (error) {
  console.error.bind(error);
  this.emit('end');
}

gulp.task('typescript-compile', function(){
  return gulp.src(['TypeScript/*.ts'])
    .pipe(typescript())
    .on('error', errorLog)
    .pipe(gulp.dest('js/'))
    .pipe( shell(['build.cmd']) )
    //.pipe( shell(['cd C:/test/protracter-test/poc3 & ionic serve']) )
    .pipe( exit() );
});

gulp.task('watch', function () {
  gulp.watch('TypeScript/*.ts', ['typescript-compile']);
});

gulp.task('default', ['typescript-compile', 'watch']);