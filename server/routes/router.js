var express = require('express');
var path = require('path');
var indexRoute = require('./index');
var saveTheDateRoute = require('./savethedate');
var commentRoute = require('./comment');

var router = express.Router();
router.use(express.static(path.join(__dirname, '../../public')));
router.use('/story', indexRoute);
router.use('/rsvp', indexRoute);
router.use('/registry', indexRoute);
router.use('/savethedate', saveTheDateRoute);
router.use('/comment', commentRoute);
router.use('/', indexRoute);

router.get('*', function(req, res) {
    res.redirect('/');
});

module.exports = router;
