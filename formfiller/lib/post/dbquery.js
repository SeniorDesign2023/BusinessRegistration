const database = require("../database")

module.exports = async function dbquery(req, res) {
    console.log("dbquery recieved")
    return await database.query(req.body.query, req.body.data || [])
}