var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();
	autoprefixer = require('gulp-autoprefixer'),
	cssbeautify = require('gulp-cssbeautify');

gulp.task('server', function() {
	browserSync.init({
        server: {
            baseDir: "./"
        },
		notify: false
    });
})
gulp.task('style', function() {
	gulp.src('./scss/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: true
		}))
		.pipe(cssbeautify())
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', ['style']);
	gulp.watch('./css/*.css', browserSync.reload);
	gulp.watch('./*.html', browserSync.reload);
});

gulp.task('default', ['server', 'style', 'watch']);
