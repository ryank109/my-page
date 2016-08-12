var express = require('express');
var router = express.Router();
var collection = require('../collection/guest');
var indexRoute = require('./index');

function answer(req, res, attend) {
    var email = req.query['email'];
    var guestCollection = collection(req.db);
    guestCollection.find(email).then(function(doc) {
        if (doc) {
            doc.attend = attend;
            guestCollection.update(doc).then(function() {
                res.redirect(attend === 'Y' ? '/yes' : '/no');
            });
        } else {
            var data = {
                email: email,
                attend: attend
            };
            guestCollection.insert(data).then(function() {
                res.redirect(attend === 'Y' ? '/yes' : '/no');
            });
        }
    });
}

router.get('/yes', function(req, res) {
    answer(req, res, 'Y');
});

router.get('/no', function(req, res) {
    answer(req, res, 'N');
});

module.exports = router;
