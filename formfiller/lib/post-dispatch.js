const session = require("./session")

const login = require("./post/login")
const signup = require("./post/signup")
const createorg = require("./post/createorg")
//const verifyAndRedirect = session.verifyAndRedirect
const formresponse = require("./post/formresponse")
const dbquery = require("./post/dbquery")

const util = require("util")

const table = {
    login,
    signup,
    createorg,
    formresponse,
    dbquery
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