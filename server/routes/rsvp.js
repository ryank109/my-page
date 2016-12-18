var express = require('express');
var request = require('request');
var router = express.Router();
var collection = require('../collection/rsvp');
var indexRoute = require('./index');

router.get('/', indexRoute);

router.get('/form', function(req, res) {
    res.redirect('/rsvp');
});

router.post('/', function(req, res) {
    var db = req.db;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var cantMake = req.body.cantMake;
    var guests = req.body.guests;
    var mealOption = req.body.mealOption;
    var now = new Date();
    var data = {
        firstName: firstName,
        lastName: lastName,
        cantMake: cantMake,
        guests: guests,
        mealOption: mealOption,
        updated: now.toISOString()
    };

    var rsvpCollection = collection(db);
    rsvpCollection.find(firstName, lastName).then(function(doc) {
        if (doc) {
            doc.cantMake = cantMake;
            doc.guests = guests;
            rsvpCollection.update(doc).then(function() {
                res.status(200).end();
            });
        } else {
            rsvpCollection.insert(data).then(function() {
                res.status(201).end();
            });
        }
    });
});

router.get('/:firstName/:lastName', function(req, res) {
    var firstName = req.params.firstName;
    var lastName = req.params.lastName;
    var db = req.db;
    var rsvpCollection = collection(db);
    rsvpCollection.find(firstName, lastName).then(function(doc) {
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).end();
        }
    });
});

module.exports = router;
