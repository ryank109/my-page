var express = require('express');
var path = require('path');
var MobileDetect = require('mobile-detect');

module.exports = function(req, res, next) {
    if (req.headers['content-type'] === 'application/json') {
        next();
        return;
    }

    var md = new MobileDetect(req.headers['user-agent']);
    if (md.phone()) {
        res.sendFile(path.join(__dirname, '../../phone.html'));
    } else {
        res.sendFile(path.join(__dirname, '../../desktop.html'));
    }
};
