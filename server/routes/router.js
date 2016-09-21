var express = require('express');
var path = require('path');
var indexRoute = require('./index');
var saveTheDateRoute = require('./savethedate');
var commentRoute = require('./comment');
var guestRoute = require('./guest');
var loginRoute = require('./login');
var adminRoute = require('./admin');

var router = express.Router();
router.use(express.static(path.join(__dirname, '../../public')));
router.use('/story', indexRoute);
router.use('/rsvp', indexRoute);
router.use('/registry', indexRoute);
router.use('/savethedate', saveTheDateRoute);
router.use('/comment', commentRoute);
router.use('/guest', guestRoute);
router.use('/yes', indexRoute);
router.use('/no', indexRoute);
router.use('/auth', loginRoute);
router.use('/adminlogin', loginRoute);
router.use('/sooandryanadmin', adminRoute);
router.use('/', indexRoute);

router.get('*', function(req, res) {
    res.redirect('/');
});

module.exports = router;
