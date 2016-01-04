/* global require */

var gulp = require("gulp");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var watch = require("gulp-watch");
var batch = require("gulp-batch");
var glob = require("glob");

/*
 * Matches every *.js or *.jsx file under the source directory which has a
 * name (without extension) that ends in "_tests"
 */
var sourcePathPattern = "./src/**/!(*_tests).@(js|jsx)";

gulp.task("default", function () {
  browserify(glob.sync(sourcePathPattern), {
    debug: true
  })
  .transform("babelify")
  .bundle()
  .pipe(source("PROJECT_NAME.js"))
  .pipe(gulp.dest("build"));
});

gulp.task("watch", function () {
  watch(sourcePathPattern, batch(function (events, done) {
    gulp.start("default", done);
  }));
});
