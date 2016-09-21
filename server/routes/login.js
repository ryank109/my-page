var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexRoute = require('./index');

router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/sooandryanadmin');
        return;
    }
    next();
}, indexRoute);

router.post('/', passport.authenticate('local'), function(req, res) {
    res.status(200).end();
});

module.exports = router;
