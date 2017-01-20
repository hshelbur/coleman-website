var gulp = require("gulp");
var bable = require("gulp-babel");

gulp.task("default", function() {
	return gulp.src("src/app.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));
});