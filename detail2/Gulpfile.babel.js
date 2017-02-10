import gulp from 'gulp'
import gutil from 'gulp-util'
import webpack from 'webpack'
import concat from 'gulp-concat'
// import sourcemaps from 'gulp-sourcemaps'

import detailV3WebpackConfig from './webpack.config.detailV3'

gulp.task('detail2', callback => {
    webpack(detailV3WebpackConfig, (err, stats) => {
        if(err){
            throw new gutil.PluginError('webpack Error:', err)
        } else {
            gutil.log('detail2:build', stats.toString({
                colors: true
            }))
            callback()

            // 为了提高打包速度 jquery, underscore, backbone, 直接暴露全局变量,不参与webpack打包, 直接合并压缩文件
            gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/underscore/underscore-min.js', './node_modules/backbone/backbone-min.js', './dist/vendor.js'])
            .pipe(concat('dvendor.js'))
            // .pipe(sourcemaps.write())
            .pipe(gulp.dest('./dist/'))

            // console.log(colors.yellow.bold('modify times:' + index++ + ' at ' + moment().format("HH:mm:ss") ))
        }
    })
})

// gulp.task('detail2-vendor-concat', () => {
//     return gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/underscore/underscore-min.js', './node_modules/backbone-min.js'])
//             .pipe(concat('dvendor.js'))
//             .pipe(gulp.dest('./dist/'))
// })

gulp.task('detail2-dev', () => {
    gulp.watch('./src/**/*.js',['detail2'])
})