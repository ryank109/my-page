var express = require('express');
var path = require('path');
var MobileDetect = require('mobile-detect');
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
    var md = new MobileDetect(req.headers['user-agent']);
    if (md.phone()) {
        res.sendFile(path.join(__dirname, '../../phone.html'));
        return;
    }

    res.sendFile(path.join(__dirname, '../../desktop.html'));
});

module.exports = router;
