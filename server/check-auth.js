module.exports = {
    checkAuth: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/adminlogin');
    },

    checkAuthAPI: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.status(401).end();
    }
}
