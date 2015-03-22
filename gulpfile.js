var gulp = require('gulp'),
  sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('public/css/*.sass')
    .pipe(sass({
      indentedSyntax: true
    }))
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
  gulp.watch('public/css/*.sass', ['sass']);
});

gulp.task('default', function() {
  gulp.run('watch');
});
