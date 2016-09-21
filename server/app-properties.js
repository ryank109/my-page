var fs = require('fs');
var path = require('path');

function readFile(done) {
    fs.readFile(path.join(__dirname, '../app.properties'), 'utf8', function(err, data) {
        if (err) {
            console.log('could not read file: app.properties');
            throw new Error('could not read file: app.properties');
        }

        if (!data) {
            console.log('empty app.properties file');
            throw new Error('empty app.properties file');
        }

        done(data.split('\n'));
    });
}

module.exports = {
    init: function() {
        var self = this;
        readFile(function(props) {
            var tokens;
            props.forEach(function(prop) {
                tokens = prop.split('=');
                if (tokens.length === 2) {
                    self[tokens[0]] = tokens[1];
                }
            });
        });
    },

    getProperty: function(name) {
        return this[name];
    }
};
