var express = require('express');
var router = express.Router();
var collection = require('../collection/comment');
var indexRoute = require('./index');
var checkAuth = require('../check-auth').checkAuthAPI;

router.get('/', indexRoute);

router.get('/all', checkAuth, function(req, res) {
    var guestCollection = collection(req.db);
    guestCollection.all().then(function(doc) {
        res.status(200).json(doc);
    });
});

router.post('/', function(req, res) {
    var db = req.db;
    var name = req.body.name;
    var comment = req.body.comment;
    var data = { name: name, comment: comment };

    collection(db).insert(data).then(function(doc) {
        res.status(201).end();
    });
});

module.exports = router;
