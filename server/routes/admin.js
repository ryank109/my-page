var express = require('express');
var path = require('path');
var router = express.Router();
var checkAuth = require('../check-auth').checkAuth;

router.get('/', checkAuth, function(req, res) {
    res.sendFile(path.join(__dirname, '../../desktop.html'));
});

module.exports = router;
