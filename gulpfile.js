var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var changed = require('gulp-changed');
var _ = require('underscore');
var webpack = require('webpack');
var ug = require('ug');
let cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');

// 常量
var root = '/';
var dest = 'build';
var srcJs = 'src/js'
var srcCss = 'src/css'
var destJs = dest + '/' + srcJs;
var destCss = dest + '/' + srcCss;

gulp.task('set-dev-node-env', function () {
  return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function () {
  return process.env.NODE_ENV = 'production';
});

// webpack
gulp.task('webpack', ['set-prod-node-env'], function (callback) {
  var webpackConfig = require('./webpack.config.js')
  webpack(webpackConfig, function (err, stats) {
    callback();
  });
});

// 转移文件 目标 <= 源
gulp.task('transfer', function () {
  var lists = {
    '': ['manifest.json'],
    'app/assets/js/vendor': ['app/assets/js/vendor/*'],
    'app/assets/img/icons': ['app/assets/img/icons/*'],
    'app/assets/css': ['app/assets/css/*'],
    'app/dist': ['app/dist/*'],
    'app/option/assets/css': ['app/option/assets/css/*'],
    'app/option/assets/fonts': ['app/option/assets/fonts/*'],
    'app/option/assets/img': ['app/option/assets/img/*'],
    'app/option': ['app/option/*.html'],
  };
  _.each(lists, function (value, key) {
    var destdir = dest + '/' + key;
    console.log('transfer ->', value);
    return gulp.src(value)
      .pipe(changed(destdir))
      .pipe(gulp.dest(destdir));
  });
});

// ug
var ugNo = [
  'FileSaver.min.js',
  'imagesloaded.pkgd.min.js',
  'jquery.min.js',
  'jszip.min.js',
  'vue.min.js',
  'masonry.pkgd.min.js',
  'underscore.min.js',
  'clipboard.min.js',
  'require.js',
  'underscore.string.min.js',
  'jquery-3.2.1.min.js',
  'inject.entry.js'
];
gulp.task('ug', function () {
  setTimeout(function () {
    var inplace = function (file) {

      try {
        fs.writeFileSync(file, ug(fs.readFileSync(file)));
        // 此处是可能产生例外的语句
      } catch (error) {
        console.log(error);
        // 此处是负责例外处理的语句
      } finally {
        // 此处是出口语句
      }

    };

    (function walk(dir) {
      if (fs.statSync(dir).isFile()) {
        if (path.extname(dir) === '.js') {
          var filename = dir.substr(dir.lastIndexOf('/') + 1);
          if (ugNo.indexOf(filename) == -1) {
            console.log(dir, filename);
            inplace(dir);
          }
        }
      } else {
        fs.readdirSync(dir).forEach(function (filename) {
          var filepath = path.resolve(dir, filename);
          walk(filepath);
        });
      }
    })(dest);
  }, 500);
});

// minify-css
gulp.task('minify-css', () => {
  var lists = {
    'app/assets/css': ['build/app/assets/css/*.css'],
    'app/options/assets/css': ['build/app/options/assets/css/*.css'],
  };
  _.each(lists, function (value, key) {
    var destdir = dest + '/' + key;
    //console.log(destdir, value)
    return gulp.src(value)
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest(destdir));
  });
});

// 监控
gulp.task('watch', function () {
  gulp.watch(['manifest.json'], ['transfer']);
  gulp.watch(['app/*/*.js', 'app/*.js', '!app/collect.entry.js'], ['default']);
  gulp.watch([srcJs + '/*.js', srcCss + '/*.css'], ['default']);
});

gulp.task('default', function (callback) {
  runSequence('webpack', 'transfer', 'ug', 'minify-css',
    callback);
});