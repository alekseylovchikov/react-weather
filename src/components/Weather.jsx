var React = require('react');
var { Link } = require('react-router');

var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
var ErrorModal = require('ErrorModal');
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

        this.setState({
          isLoading: true,
          errorMessage: undefined
        });

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
                errorMessage: err.message
            });
        });
    },
    render: function() {
        var { isLoading, city, temp, desc, errorMessage } = this.state;

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
                        <h3 className="text-center">Try later</h3>
                    </div>
                );
            }
        }

        function renderError() {
          if (typeof errorMessage === 'string') {
            return (
              <ErrorModal message={errorMessage} />
            );
          }
        }

        return (
            <div>
                <WeatherForm onSearch={ this.handleSearch } />
                { renderMessage() }
                { renderError() }
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
