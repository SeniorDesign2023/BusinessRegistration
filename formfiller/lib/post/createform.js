const database = require("../database")

module.exports = function createform(req, res) {
    database.query("SELECT * FROM FORM WHERE Form_Name = ?", req.body.formName).then(records => {

        if (records.length == 0)
            return database.query("INSERT INTO FORM (Form_Name, Form_Data) VALUES (?, ?)", [req.body.formName, req.body.json])
        else
            return database.query("UPDATE FORM SET Form_Data = ? WHERE Form_Name = ?", [req.body.json, req.body.formName])

    })
}