var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var host = process.env.IP || 'localhost';

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(port, host, function(err) {
    if (err) {
        console.log(err);
    }
    
    console.log('Open: ' + host);
});