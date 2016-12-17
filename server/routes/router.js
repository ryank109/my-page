var express = require('express');
var path = require('path');
var adminRoute = require('./admin');
var commentRoute = require('./comment');
var guestRoute = require('./guest');
var indexRoute = require('./index');
var loginRoute = require('./login');
var photosRoute = require('./photos');
var rsvpRoute = require('./rsvp');
var saveTheDateRoute = require('./savethedate');

var router = express.Router();
router.use(express.static(path.join(__dirname, '../../public')));
router.use('/', indexRoute);
router.use('/adminlogin', loginRoute);
router.use('/auth', loginRoute);
router.use('/comment', commentRoute);
router.use('/guest', guestRoute);
router.use('/info', indexRoute);
router.use('/no', indexRoute);
router.use('/photos', photosRoute);
router.use('/photos/:photoId', indexRoute);
router.use('/registry', indexRoute);
router.use('/rsvp', rsvpRoute);
router.use('/savethedate', saveTheDateRoute);
router.use('/sooandryanadmin', adminRoute);
router.use('/story', indexRoute);
router.use('/yes', indexRoute);

router.get('*', function(req, res) {
    res.redirect('/');
});

module.exports = router;
