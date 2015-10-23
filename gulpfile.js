// include gulp
var gulp = require('gulp'); 
 
// include plug-ins

var concat = require('gulp-concat');

// // include plug-ins
var autoprefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();


var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var es = require("event-stream");


 
//JS concat, strip debugging and minify
gulp.task('scripts', function() {

    gulp.src('src/*/script.coffee')
     .pipe(coffee({bare: true}).on('error', gutil.log))
     //.pipe(changed(DEST))
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream());

});


gulp.task('sass', function () {
    gulp.src('./src/*/style.scss')
      .pipe(sass({errLogToConsole:true}))
      .pipe(autoprefix('last 2 versions'))
      .pipe(gulp.dest('./build/'))
      .pipe(browserSync.stream());
});


gulp.task('webserver', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});

gulp.task('jade', function() {

  gulp.src('./src/*/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./build/'))
});


gulp.task('default', ['scripts', 'sass', 'jade', 'webserver'], function() {

  gulp.watch(['./src/*/index.jade'], function() {
     gulp.run('jade');
  });
 
  // watch for JS changes
  gulp.watch(['./src/*/script.coffee'], function() {
    gulp.run('scripts');
  });
 
  gulp.watch(['./src/*/style.scss'], function() {
    gulp.run('sass');
  });

});