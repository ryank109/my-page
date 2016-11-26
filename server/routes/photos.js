var express = require('express');
var request = require('request');
var router = express.Router();
var indexRoute = require('./index');
var appProperties = require('../app-properties');

router.get('/', indexRoute);

router.get('/media', function(req, res) {
    var accessToken = appProperties.getProperty('accessToken');
    var options = {
        url: 'https://api.instagram.com/v1/tags/sooryanwedding/media/recent?access_token=' + accessToken,
        json: true
    };

    request.get(options, function(error, response, data) {
        res.status(200).send(data);
    });
});

module.exports = router;
