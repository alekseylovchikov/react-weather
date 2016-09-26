var React = require('react');

var h = require('../helpers.js');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var city = this.refs.city.value;

        if (city.length > 0) {
            city = h.capitalize(city);
            this.refs.city.value = '';
            this.props.onSearch(city);
        }
    },
    render: function() {
        return (
            <div>
              <form onSubmit={ this.onFormSubmit }>
                <input type="search" ref="city" placeholder="Type city" />
                <button className="button expanded hollow">Get Weather</button>
              </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
