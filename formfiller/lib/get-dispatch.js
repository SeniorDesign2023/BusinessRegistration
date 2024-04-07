const dbquery = require("./get/dbquery")
const fetchadmins = require("./get/fetchadmins")
const fetchmembers = require("./get/fetchmembers")
const fetchorganizations = require("./get/fetchorganizations")
const fetchorgforms = require("./get/fetchorgforms")
const fetchprofile = require("./get/fetchprofile")
const validateuser = require("./get/validateuser")
const fetchassign = require("./get/fetchassign")

const table = {
    dbquery,
    fetchadmins,
    fetchmembers,
    fetchorganizations,
    fetchorgforms,
    fetchprofile,
    validateuser,
    fetchassign
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

    try {
        return table[endpoint](req, res)
    } catch (e) {
        res.status(500).json(e)
    }

}