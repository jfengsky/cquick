// import gulp from 'gulp'
// import babel from 'gulp-babel'

const gulp = require('gulp')
const babel = require('gulp-babel')
const jsx = require('gulp-jsx')

gulp.task('default', () =>
    gulp.src('public/src/Todolist.jsx')
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        .pipe(jsx({
            factory: 'React.createClass'
        }))
        .pipe(gulp.dest('trans'))
);