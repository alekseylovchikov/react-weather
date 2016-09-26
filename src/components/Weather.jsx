var React = require('react');
var { Link } = require('react-router');

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
    componentWillMount: function() {
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

            console.error(err);
        });
    },
    render: function() {
        var { isLoading, city, temp, desc } = this.state;

        function renderMessage() {
            if (isLoading) {
                return (
                    <div>
                        <h1 className="text-center">Loading...</h1>
                    </div>
                );
            } else if (temp && city) {
                return <WeatherInfo city={ city } temp={ temp } desc={ desc } />;
            } else {
                return (
                    <div>
                        <h1 className="text-center">Sorry... Can't find weather info</h1>
                        <h4 className="text-center">Try later</h4>
                    </div>
                );
            }
        }

        return (
            <div>
                <WeatherForm onSearch={ this.handleSearch } />
                { renderMessage() }
                <h2>Examples</h2>
                <ol>
                  <li><Link to="/?location=Moscow">Moscow, RU</Link></li>
                  <li><Link to="/?location=Chicago">Chicago, US</Link></li>
                </ol>
            </div>
        );
    }
});

module.exports = Weather;
