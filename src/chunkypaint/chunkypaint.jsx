/*
 * Structure:
 * - ChunkyPaint
 *   - PaintCanvas
 *   - PaintCanvasThumbnail
 *   - PaintTools
 *   - PaintPalette
 *     - CurrentColor
 *     - Colors
 *   - JSONEditor
 */
/* global require */

/* Required for React to work in elderly browsers
*/

module.exports = (function (React) {
  "use strict";

  return React.createClass({
    getInitialState: function() {
      return {liked: false};
    },
    handleClick: function() {
      this.setState({liked: !this.state.liked});
    },
    render: function() {
      var text = this.state.liked ? "like" : "haven\'t liked";
      var {className, ...other} = this.props;
      return (
        <p {...other} className={className} onClick={this.handleClick}>
          You {text} this. Click to toggle.
        </p>
      );
    }
  });
})(require("react"));
