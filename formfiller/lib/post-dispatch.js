const session = require("./session")

const login = require("./post/login")
const signup = require("./post/signup")
const createorg = require("./post/createorg")
const formresponse = require("./post/formresponse")
const createform = require("./post/createform")
const submitprofile  = require("./post/submitprofile")

const util = require("util")

const table = {
    login,
    signup,
    createorg,
    formresponse,
    createform,
    submitprofile
}

module.exports = function dispatch(req, res, nextHandle) {

    var endpoint = req.body.endpoint

    if (!endpoint) {
        res.status(400).send({message: "No POST endpoint specified"})
        return
    }

    return table[endpoint](req, res)

}