
var React = require("react");

module.exports = React.createClass({
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
