const database = require("../database")
const util = require("util")

module.exports = async function formresponse(req, res) {

    console.log(util.inspect(req.body))

    await database.query("INSERT INTO Forms (OrgID, Form_Name, Form_Data, Completed) VALUES (?, ?, ?, ?)", [-1, req.body.name, JSON.stringify(req.body.data), req.body.isDraft ? "Incomplete" : "Complete"])

    res.json({})

}