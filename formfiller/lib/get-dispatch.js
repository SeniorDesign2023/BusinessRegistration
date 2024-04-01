const dbquery = require("./get/dbquery")
const fetchprofile = require("./get/fetchprofile")
const fetchorganizations = require("./get/fetchorganizations")
const fetchorgforms = require("./get/fetchorgforms")
const validateuser = require("./get/validateuser")

const table = {
    dbquery,
    fetchprofile,
    fetchorganizations,
    fetchorgforms,
    validateuser,
}

module.exports = function dispatch(req, res, nextHandle) {

    var endpoint = req.query.endpoint

    if (!endpoint) {
        res.status(400).send({message: "No GET endpoint specified"})
        return
    }

    //console.log("Get request: " + endpoint)

    if (!table[endpoint]) {
        res.status(404).send({message: "Invalid GET endpoint"})
        return
    }

    return table[endpoint](req, res)

}