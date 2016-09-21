var fs = require('fs');
var path = require('path');
var appProperties = require('./app-properties');
var LocalStrategy = require('passport-local');

function getPropValue(prop, name) {
    return prop.split('=')[1];
}

module.exports = new LocalStrategy(
    function(username, password, done) {
        if (username === appProperties.getProperty('username')
            && password === appProperties.getProperty('password')) {
            return done(null, username);
        } else {
            return done(null, false, { message: 'Wrong!' });
        }
    }
);
