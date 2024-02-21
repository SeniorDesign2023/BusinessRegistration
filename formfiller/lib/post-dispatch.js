const session = require("./session")

const login = require("./post/login")
const signup = require("./post/signup")
const verifyAndRedirect = session.verifyAndRedirect

const util = require("util")

const table = {
    login,
    signup,
    verifyAndRedirect
}

module.exports = function dispatch(req, res, nextHandle) {

    //console.log(util.inspect(req))

    var endpoint = req.body.endpoint

    if (!endpoint) {
        res.status("400").send({message: "No POST endpoint specified"})
        return
    }

    return table[endpoint](req, res)

}