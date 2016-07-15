var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
// api
var getWeather = require('getWeather');
var getCity = require('getCity');

var h = require('../helpers.js');

var geolocation = require('geolocation');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
        };
    },
    componentDidMount: function() {
        var self = this;
        geolocation.getCurrentPosition(function (err, data) {
            if (err) throw new Error(err);
            
            getCity.getCity(data.coords.latitude, data.coords.longitude).then(function(data) {
                self.handleSearch(data);
            }, function(err) {
                console.log(err);
            });
        });
    },
    handleSearch: function(city) {
        var self = this;
        
        this.setState({ isLoading: true });
        
        getWeather.getTemp(city).then(function(temp) {
            self.setState({
                city: city,
                temp: h.formatTemp(temp.temp),
                desc: temp.desc,
                isLoading: false,
            });
        }, function(err) {
            self.setState({
                isLoading: false,    
            });
            
            alert(err);
        });
    },
    render: function() {
        var { isLoading, city, temp, desc } = this.state;
        
        function renderMessage() {
            if (isLoading) {
                return (
                    <div>
                        <h1 className="text-center">Loading...</h1>
                        <div className="progress progress-striped active">
                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                <span className="sr-only">100% Complete</span>
                            </div>
                        </div>
                    </div>
                );
            } else if (temp && city) {
                return <WeatherInfo city={ city } temp={ temp } desc={ desc } />;
            } else {
                // none    
            }
        }
        
        return (
            <div>
                <WeatherForm onSearch={ this.handleSearch } />
                { renderMessage() }
            </div>
        );
    }
});

module.exports = Weather;