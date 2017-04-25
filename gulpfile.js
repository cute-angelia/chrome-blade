// defined
var gulp      = require('gulp');
var changed   = require('gulp-changed');
var uglify    = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var jshint    = require('gulp-jshint');
var tmodjs    = require('gulp-tmod');
var _         = require('underscore');
var obfuscate = require('gulp-obfuscate');


// 常量
var root         = '/';
var dest         = 'build';
var srcJs        = 'src/js'
var srcCss       = 'src/css'
var destJs       = dest + '/' + srcJs;
var destCss      = dest + '/' + srcCss;
var tempSrc      = 'src/module/option/tpl';
var tempJsDest   = srcJs;
var tempHtmlDest = 'src/module/option';

// 转移文件
gulp.task('transfer', function() {
  var lists = {
    '': ['manifest.json'],
    'src/img': ['src/img/*/*', '!src/img/upload/*'],
    'src/js/vendor': ['src/js/vendor/*'],
    'src/css': ['src/css/*/*', 'src/css/*.css'],
    'src/module/option/': 'src/module/option/index.html'
  };

  _.each(lists, function(value, key) {
    var destdir = dest + '/' + key;
    return gulp.src(value)
     .pipe(changed(destdir))
     .pipe(gulp.dest(destdir));
  });
});


// 模板生成Tmod
// gulp.task('tmod', function() {
//   gulp.src([tempSrc + '/*.html', tempSrc + '/*/*.html'])
//     .pipe(tmodjs({
//           base: tempSrc,
//           combo: true,
//           minify: true,
//           compress: true,
//           output: srcJs
//     }));
// });

// 校验文件
gulp.task('verify', function() {
  gulp.src(['src/js/*.js', '!src/js/template.js'])
     .pipe(jshint())
     .pipe(jshint.reporter('default'));
});


// 压缩
gulp.task('compress', function() {
  gulp.src(['src/js/*.js', 'src/js/*/*.js'])
    //.pipe(uglify())
    .pipe(changed(destJs))
    .pipe(gulp.dest(destJs));

  gulp.src(['src/css/*.css', 'src/css/*/*.css'])
    .pipe(changed(destCss))
    .pipe(minifyCss())
    .pipe(gulp.dest(destCss));

  // 加密
  gulp.src(['src/js/inject.js'])
      .pipe(obfuscate({exclude: [
          'document'
        , 'title'
        , 'onclick'
        , 'oncontextmenu'
        , 'onselectstart'
        , 'oncopy'
        , 'target'
        , 'value'
        , 'oD_button'
        , 'placeholder'
        , 'attr'
        , 'id'
        , 'type'
        , 'data'
        , 'zindex'
        , 'ConfigChrome'
        , 'textContent'
        , 'innerHTML'
        , 'returnValue'
        , 'i'
        , 'USER_ID'
        , 'USER_NAME'
        , 'USER_FACE'
        , 'M'
        , 'sign'
        , 'time'
        , 'a'
        , 'A'
        , 'b'
        , 'B'
        , 'g'
        , 'ig'
        , 'style'
        , 'backgroundColor'
        , 'color'
        , 'font'
        , 'http'
        , 'href'
        , 'magnet'
        ]}))
      .pipe(gulp.dest(destJs));

});

// 监控
gulp.task('watch', function() {
  gulp.watch(['manifest.json'], ['transfer']);
  //gulp.watch([tempSrc + '/*.html', tempSrc + '/*/*.html'], ['tmod']);
  gulp.watch([srcJs + '/*.js', srcCss + '/*.css'], ['compress']);
});

// task
gulp.task('test', ['verify']);
gulp.task('default', ['transfer', 'compress', 'watch']);
