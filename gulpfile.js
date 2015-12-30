/* global require */

var gulp = require("gulp");
var source = require("vinyl-source-stream");
var browserify = require("browserify");

gulp.task("default", function(){
  "use strict";
  browserify({
    entries: "./src/chunkypaint/chunkypaint.jsx", 
    debug: true
  })
  .transform("babelify", {presets: ["react"]})
  .bundle()
  .pipe(source("chunkypaint.js"))
  .pipe(gulp.dest("build"));
});

/* NOTE: when you need to watch for new or deleted files, switch 
 * to the gulp-watch plugin
 */
gulp.task("watch", function () {
  gulp.watch("./src/chunkypaint/chunkypaint.jsx", ["default"]);
});
