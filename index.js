var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send('¡Hola, mundo!');
});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
