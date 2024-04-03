const database = require("../database")
const util = require("util")

module.exports = async function dbquery(req, res) {
    console.log(util.inspect(req.query))
    
    results = await database.query(req.query.query, req.query.data || [])
    res.json(results)
}