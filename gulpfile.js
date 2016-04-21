'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); // is for simplify and load all the gulp-plugin name and charge it in $
var browserSync = require('browser-sync').create(); //
var wiredep = require('wiredep').stream; //
var reload = browserSync.reload;

gulp.task('injectAppFiles', function(){
    var sources = gulp.src(['./app/styles/**/*.css'], {read: false});
    var target = gulp.src('./app/index.html');

    return target.pipe($.inject(gulp.src(['./app/styles/**/*.css'], {read: false}), {ignorePath: 'app', addRootSlash: false}))
        .pipe(gulp.dest('./app/'));
});

gulp.task('styles', function(){
    gulp.src('./app/styles/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: ['.']
    }))
    //.pipe($.shorthand)
    .pipe($.autoprefixer('last 2 versions', 'safari 5', 'ie6', 'ie7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    //.pipe($.cssmin)
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./app/styles/'))
    .pipe(browserSync.stream({match: '**/*.css'}));
    //notify
});

gulp.task('serve',['styles', 'injectAppFiles'], function(){
    browserSync.init({
        server: './app'
    });
    gulp.watch('./app/styles/**/*.scss', ['styles']);
    //gulp.watch('./js/src/*.js', ['lint', 'js']);
    //gulp.watch('./img/src/*.{png,jpg,gif}', ['img']);
    gulp.watch('./app/**/*.html').on('change', reload);

});
