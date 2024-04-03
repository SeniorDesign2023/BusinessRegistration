const database = require("../database")
const util = require("util")

module.exports = async function formresponse(req, res) {

    console.log(util.inspect(req.body))

    await database.query("INSERT INTO Forms (Org_Tag, Form_Name, Form_Data, Completed) VALUES (?, ?, ?, ?)", [req.body.org, req.body.name, JSON.stringify(req.body.data), req.body.isDraft ? "Incomplete" : "Complete"])

    res.json({})

}