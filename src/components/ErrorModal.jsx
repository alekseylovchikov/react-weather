var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    return (
      <div className="reveal" id="error-modal" data-reveal="">
        <h1 className="text-center">Error!</h1>
        <p className="lead">{this.props.error}</p>
        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
});

module.exports = ErrorModal;
