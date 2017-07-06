/*var gulp=require('gulp'),
webserver=require('gulp-webserver');
gulp.task('webserver',function(){
	gulp.src('src').pipe(webserver({
		port:"8080",
		livereload:true,
		directoryListing:{
			path:'www',
			enable:true
		},
		open:true,
		fallback:"index.html"
	}))
})*/
var gulp=require('gulp'),
    connect=require('gulp-connect');
/*gulp.task('connect',function(){
	connect.server({
		root:'src',
		livereload:true
	})
})  
gulp.task('html',function(){
	gulp.src('./src/index.html').pipe(connect.reload());
})
gulp.task('watch',function(){
	gulp.watch(['./src/*.html'],['html'])
})*/
/*gulp.task('default',['connect','watch'])*/
var minifycss=require('gulp-minify-css');
var concat=require('gulp-concat');
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');
gulp.task('minifycss', function() {

       gulp.src('src/css/*.css')  .pipe(minifycss())    //压缩的文件

           .pipe(gulp.dest('mini/css'))   //输出文件夹

           ;   //执行压缩

    });
gulp.task('minifyjs', function() {

       gulp.src('src/js/*.js')

          .pipe(concat('main.js'))    //合并所有js到main.js

          .pipe(gulp.dest('mini/js'))    //输出main.js到文件夹

          .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名

          .pipe(uglify())    //压缩

          .pipe(gulp.dest('mini/js'));  //输出

   });
var htmlmin = require('gulp-htmlmin');

gulp.task('testHtmlmin', function () {
	var options = {
        collapseWhitespace: true,//压缩HTML
        removeComments: true,//清除HTML注释
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true//删除<style>和<link>的type="text/css"
    };
    gulp.src('src/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('mini'));
});


