const gulp = require('gulp'),
  webserver = require('gulp-webserver');

gulp.task('serve', function(){
  return gulp.src('./')
    .pipe(webserver({
      livereload: true,
      port: 4000,
      host: '0.0.0.0'
    }));
});

gulp.task('start',
  gulp.series(
    'serve'
  )
);
