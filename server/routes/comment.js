var express = require('express');
var router = express.Router();
var collection = require('../collection/comment');
var indexRoute = require('./index');

router.get('/', indexRoute);

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
