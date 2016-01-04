
require("es5-shim");
require("html5shiv");

(function(LikeButton, ReactDOM, React) {
  "use strict";

  ReactDOM.render(<LikeButton/>, document.getElementById("example"));
})(require("./like-button/like-button.jsx"), require("react-dom"), require("react"));

