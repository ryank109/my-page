var express = require('express');
var router = express.Router();
var collection = require('../collection/guest');
var checkAuth = require('../check-auth').checkAuthAPI;

router.get('/', checkAuth, function(req, res) {
    var guestCollection = collection(req.db);
    guestCollection.all().then(function(doc) {
        res.status(200).json(doc);
    });
});

module.exports = router;
