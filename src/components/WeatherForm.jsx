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
            <form onSubmit={ this.onFormSubmit }>
                <div className="input-group">
                    <span className="input-group-label">Type city</span>
                    <input className="input-group-field" type="text" ref="city" />
                </div>
            </form>    
        );
    }
});

module.exports = WeatherForm;