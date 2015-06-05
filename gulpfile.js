//var elixir = require('laravel-elixir');
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');

//elixir(function(mix) {
//    mix.less('app.less');
//});


//gulp.task('css', function(){
//    return gulp.src('public/sass/main.scss')
//        .pipe(sass({ style: 'compressed'}))
//        .pipe(autoprefixer('last 15 version'))
//        .pipe(gulp.dest('public/css'))
//        .pipe(notify({message: 'File has been saved Project name here'}));
//});
gulp.task('sass', function(){
    return sass('public/sass/main.scss', {style: 'compressed'})
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('public/css'))
        .pipe(notify({message: 'File has been saved Project name here'}));
});

gulp.task('default', function(){
    gulp.run('sass');
    gulp.watch('public/sass/*.scss', function(){
        gulp.run('sass');
    });
});


