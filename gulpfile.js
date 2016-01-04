/* global require */

/* This file defines tasks that can be run via a command line tool called gulp.
 * See http://gulpjs.com/
*/
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

/* This task will be run when you run `gulp` without args.
 * It currently just runs the build task, so `gulp` does the same thing as
 * `gulp build`.
 */
gulp.task("default", ["build"]);

/* Compile all source files using Babel, bundle them along with their
 * dependencies (using Browserify) and output the result to
 * build/PROJECT_NAME.js
 */
gulp.task("build", function () {
  /* glob.sync() returns an array of matching file paths */
  browserify(glob.sync(sourcePathPattern), {
    debug: true /* generate source maps */
  })
  /* use Babel via Babelify */
  .transform("babelify")
  .bundle()
  /* This creates a virtual file
   * which receives the output of Browserify.
   */
  .pipe(source("PROJECT_NAME.js"))
  /* Finally, convert the virtual to a real file on the filesystem
  */
  .pipe(gulp.dest("build"));
});

/* Run `gulp watch` from the command like to have the above task run
 * automatically as needed during development.
 */
gulp.task("watch", function () {
  watch(sourcePathPattern, batch(function (events, done) {
    gulp.start("build", done);
  }));
});
