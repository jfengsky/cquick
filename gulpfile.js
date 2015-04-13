var gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  header = require('gulp-header'),

  tempDate = new Date(),

  tempTime = tempDate.getFullYear() + ' ' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();

gulp.task('sass', function() {
  gulp.src('public/css/*.sass')
    .pipe(sass({
      indentedSyntax: true
    }))
    .pipe(gulp.dest('public/css'))
});

gulp.task('uglify', function(){
    gulp.src('public/js/youyou.js')
        .pipe(uglify())
        .pipe(header('/* lastModify ' + tempTime + ' */\n'))
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function() {
  gulp.watch('public/css/*.sass', ['sass']);
});


gulp.task('default', function() {
  gulp.run('watch');
});
