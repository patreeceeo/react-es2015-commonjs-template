/*
 * React, as well as most modern apps, will require some shims (or shivs:)) to
 * function in older browsers. You can conveniently grab all of them with these
 * two modules. You can delete these lines if you're not supporting older
 * browsers.
 */
require("es5-shim");
require("html5shiv");

/* eslint-disable vars-on-top */
var LikeButton = require("./like-button/like-button.jsx");
var ReactDOM = require("react-dom");
/*
 * React needs to be available in any file that uses the JSX syntax, for now,
 * even if there are no explicit references to React. See:
 * http://facebook.github.io/react/blog/2015/02/24/streamlining-react-elements.html#problem-it-couples-jsx-to-react
 */
var React = require("react");
/* eslint-enable vars-on-top */


ReactDOM.render(<LikeButton/>, document.getElementById("example"));

