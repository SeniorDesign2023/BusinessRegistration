const session = require("./session")

const login = require("./post/login")
const signup = require("./post/signup")
const createorg = require("./post/createorg")
const formresponse = require("./post/formresponse")
const dbquery = require("./post/dbquery")
const createform = require("./post/createform")
const submitprofile  = require("./post/submitprofile")
const addadmin = require("./post/addadmin")
const addmember = require("./post/addmember")
const searchorg = require("./post/searchorg")
const assign2form = require("./post/assign2form")

const util = require("util")

const table = {
    login,
    signup,
    createorg,
    formresponse,
    dbquery,
    createform,
    submitprofile,
    addadmin,
    addmember,
    searchorg,
    assign2form
}

module.exports = function dispatch(req, res, nextHandle) {

    //console.log(util.inspect(req))

    var endpoint = req.body.endpoint

    if (!endpoint) {
        res.status(400).send({message: "No POST endpoint specified"})
        return
    }

    try {
        return table[endpoint](req, res)
    } catch (e) {
        res.status(500).json(e)
    }

}