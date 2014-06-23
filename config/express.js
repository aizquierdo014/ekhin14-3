var favicon = require('serve-favicon');

module.exports = function(app) {
    app.use(favicon(__dirname + '/../public/img/icons/favicon.ico'));
};