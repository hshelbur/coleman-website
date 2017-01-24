
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("build-javascript", function () {
 return gulp.src('src/**/*.js')
   .pipe(babel())
   .pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['build-javascript'])
})

gulp.task('default', ['build-javascript'])