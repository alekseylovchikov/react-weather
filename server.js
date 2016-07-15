var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
// var host = process.env.IP || 'localhost';

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }    
});

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, function(err) {
    if (err) {
        throw new Error(err);
    }
});