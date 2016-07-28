var express = require('express');
var router = express.Router();
var collection = require('../collection/guest');
var indexRoute = require('./index');

// router.get('/info', indexRoute);

// router.get('/', function(req, res, next) {
//     var email = req.query['email'];
//     if (!email) {
//         res.redirect('/');
//         return;
//     }

//     var guestCollection = collection(req.db);
//     guestCollection.find(email).then(function(doc) {
//         if (doc) {
//             // change the answer?
//             res.redirect('/');
//             return;
//         }
//         next();
//     });
// }, indexRoute);

function answer(req, res, attend) {
    var email = req.query['email'];
    var guestCollection = collection(req.db);
    guestCollection.find(email).then(function(doc) {
        if (doc) {
            doc.attend = attend;
            guestCollection.update(data).then(function() {
                res.redirect('/yes');
            });
        } else {
            var data = {
                email: email,
                attend: attend
            };
            guestCollection.insert(data).then(function() {
                res.redirect('/no');
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
