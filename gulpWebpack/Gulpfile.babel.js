'use strict'

import gulp from 'gulp'
import gutil from 'gulp-util'
import webpack from 'webpack'
import webpackConfig from './webpack.config'
// import webpack from 'gulp-webpack'
const config = Object.create(webpackConfig)

gulp.task('webpack', callback => {
  webpack(webpackConfig, (err, stats) => {
    if(err){
      throw new gutil.PluginError("webpack:build", err);
    } else {
      gutil.log('webpack:build', stats.toString({
        colors: true
      }))
      callback()
    }
  })
})