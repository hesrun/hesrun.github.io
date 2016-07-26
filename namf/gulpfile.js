var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssbeautify = require('gulp-cssbeautify');

gulp.task('style', function() {
	gulp.src('scss/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: true
		}))
		.pipe(cssbeautify())
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
	gulp.watch('scss/**/*.scss', ['style']);
});

gulp.task('default', ['style', 'watch']);
