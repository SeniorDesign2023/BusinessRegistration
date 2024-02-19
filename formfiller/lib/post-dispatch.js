const session = require("./session")

const login = require("./login")
const signup = require("./signup")
const verifyAndRedirect = session.verifyAndRedirect

const table = {
    login,
    signup,
    verifyAndRedirect
}

module.exports = function dispatch(req, res, nextHandle) {

    var endpoint = req.body.endpoint

    if (!endpoint) {
        res.status("400").send({message: "No POST endpoint specified"})
        return
    }

    return table[endpoint]()

}