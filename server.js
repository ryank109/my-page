var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var helmet = require('helmet');
var passport = require('passport');
var path = require('path');
var router = require('./server/routes/router');
var passportStrategy = require('./server/passport-strategy');
var session = require('express-session');

var appProperties = require('./server/app-properties');
appProperties.init();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/wedding');

var app = express();

// middlewares
express.static.mime.define({'text/css': ['css']});

app.use(bodyParser.json());
app.use(function(req, res, next) {
    req.db = db;
    next();
});

app.use(cookieParser());
app.use(helmet());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret : 'nayroos',
    name : 'sessionId',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(passportStrategy);
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// routes
if (process.env.NODE_ENV !== 'production') {
    var webpack = require('webpack');
    var config = require('./configs/webpack.config.dev');
    var compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, { noInfo: true }));
    app.use(require('webpack-hot-middleware')(compiler));
} else {
    app.use(express.static(path.join(__dirname, './dist')));
}
app.use(router);

// start
var server = app.listen(3001, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3001');
});
