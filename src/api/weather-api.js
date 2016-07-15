var axios = require('axios');

// cbac7752e278d0d116576faa2d3b8ac4
const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=cbac7752e278d0d116576faa2d3b8ac4&units=metric&lang=ru&q=';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var request = `${WEATHER_API_URL}${encodedLocation}`;
        
        return axios.get(request).then(function(res) {
            // debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return {
                    temp: res.data.main.temp,
                    desc: res.data.weather[0].description,
                };
            }
        }, function(err) {
            throw new Error(err.data.message);
        });
    }
};