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
                <div className="form-group">
                    <input className="form-control" type="text" ref="city" placeholder="Type city" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Get Weather</button>
                </div>
            </form>    
        );
    }
});

module.exports = WeatherForm;