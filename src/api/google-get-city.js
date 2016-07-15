var axios = require('axios');

module.exports = {
    getCity: function(lat, lon) {
        var req = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true`;
        
        return axios.get(req).then(function(res) {
            if (res.data.status !== 'OK') {
                throw new Error(res);
            } else {
                return res.data.results[0].address_components[2].long_name;
            }
        }, function(err) {
            throw new Error(err);
        });
    }
};