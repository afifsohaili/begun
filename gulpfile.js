var gulp = require("gulp"),
  sass = require("gulp-sass"),
  uglify = require("gulp-uglify"),
  util = require("gulp-util"),
  concat = require("gulp-concat");

gulp.task("build-css", function() {
  return gulp.src("resources/scss/main.scss").
    pipe(sass()).
    pipe(concat("all.css")).
    pipe(gulp.dest("css"));
});

gulp.task("build-js", function() {
  return gulp.src([
    "bower_components/jquery/dist/jquery.js",
    "bower_components/materialize/dist/js/materialize.js",
    "resources/javascript/**/*.js"
  ]).pipe(concat("all.js")).
    pipe(util.env.type === "production" ? uglify() : util.noop()).
    pipe(gulp.dest("js"));
});

gulp.task("watch", function() {
  gulp.watch("resources/scss/**/*.scss", ["build-css"]);
  gulp.watch("resources/javascript/**/*.js", ["build-js"]);
});

gulp.task("deploy", ["build-css", "build-js"]);
