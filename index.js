var express = require('express'),
    app = express();

//Express settings
require('./config/express')(app);

app.get('/', function(req, res) {
    res.send('ola q ase');
});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
