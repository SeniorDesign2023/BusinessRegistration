const database = require("../database")
const session = require("../session")

module.exports = function validateUser(req, res, shouldRedirect = false) {

    if (!req.session || !req.session.user || !req.session.user['Email']) {

        if (shouldRedirect || req.query.shouldRedirect)
            res.status(401).location("/login").redirect("/login");
        else
            res.status(401).json({error: "User profile not found"});

        return false;

    }

    return true;

}