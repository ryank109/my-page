var express = require('express');
var router = express.Router();
var collection = require('../collection/guest');
var indexRoute = require('./index');

router.get('/info', indexRoute);
router.get('/checkAnswer', function(req, res) {
    var db = req.db;
    var email = req.query.email;

    var guestCollection = collection(db);
    guestCollection.find(email).then(function(doc) {
        res.status(200).json(doc);
    });
});

router.get('/', indexRoute);

router.get('/:email?', function(req, res) {
    var email = req.params['email'];
    var guestCollection = collection(req.db);
    guestCollection.find(email).then(function(doc) {
        res.status(200).json(doc);
    });
});

router.post('/', function(req, res) {
    var db = req.db;
    var email = req.body.email;
    var attend = req.body.attend ? 'Y' : 'N';
    console.log('email: ' + email + ', attend: ' + attend);
    var data = { email: email, attend: attend };

    var guestCollection = collection(db);
    guestCollection.find(email).then(function(doc) {
        if (doc) {
            console.log('data: ' + JSON.stringify(data));
            guestCollection.update(data).then(function() {
                console.log('update');
                res.status(200).end();
            });
        } else {
            guestCollection.insert(data).then(function() {
                console.log('insert');
                res.status(201).end();
            });
        }
    });
});

module.exports = router;
