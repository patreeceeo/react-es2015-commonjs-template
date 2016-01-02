
require("es5-shim");
require("html5shiv");

(function(ChunkyPaint, ReactDOM, React) {
  "use strict";

  ReactDOM.render(<ChunkyPaint/>, document.getElementById("chunkypaint"));
})(require("./chunkypaint/chunkypaint.jsx"), require("react-dom"), require("react"));

