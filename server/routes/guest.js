var express = require('express');
var router = express.Router();
var collection = require('../collection/guest');

router.get('/:email?', function(req, res) {
    var email = req.params['email'];
    var guestCollection = collection(req.db);
    guestCollection.find(email).then(function(doc) {
        res.status(200).json(doc);
    });
});

router.post('/', function(req, res) {
    var db = req.db;
    var guestCollection = collection(db);
    guestCollection.insert(req.body).then(function(doc) {
        res.status(201).json(doc);
    });
});

router.patch('/:email?', function(req, res) {
    var db = req.db;
    var email = req.params['email'];
    var guestCollection = collection(db);
    guestCollection.find(email).then(function(doc) {
        if (doc) {
            var data = Object.assign(doc, req.body)
            guestCollection.update(data).then(function() {
                res.status(200).json(data);
            });
        } else {
            res.status(404).end();
        }
    });
});

module.exports = router;
