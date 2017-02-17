import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'

gulp.task('default', ()=> {
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', ()=> {
    gulp.watch('src/**/*.js',['default'])
})