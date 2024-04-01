const database = require("../database")

module.exports = async function fetchOrgForms(req, res) {

    console.log(req.query)
    const tag = req.query.org

    const results = await database.query("SELECT * FROM Blank_Forms WHERE Org_Tag = ?", [tag])
    console.log(results)

    res.json(results)

}