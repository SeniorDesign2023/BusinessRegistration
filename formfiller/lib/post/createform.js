const database = require("../database")

module.exports = function createform(req, res) {
    database.query("SELECT * FROM Forms WHERE Form_Name = ?", req.body.formName).then(records => {

        if (records.length == 0)
            database.query("INSERT INTO Blank_Forms (Blank_Form_Name, Blank_Form_Data, Org_Tag) VALUES (?, ?, ?)", [req.body.formName, req.body.json, req.body.org])
        else
            database.query("UPDATE Blank_Forms SET Blank_Form_Data = ? WHERE (Blank_Form_Name = ? AND Org_Tag = ?)", [req.body.json, req.body.formName, req.body.org])

        res.json({})

    })
}