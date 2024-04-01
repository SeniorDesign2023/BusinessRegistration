const database = require("../database")

module.exports = function createform(req, res) {
    database.query("SELECT * FROM Forms WHERE Form_Name = ?", req.body.formName).then(records => {

        if (records.length == 0)
            return database.query("INSERT INTO Blank_Forms (Blank_Form_Name, Blank_Form_Data) VALUES (?, ?)", [req.body.formName, req.body.json])
        else
            return database.query("UPDATE Blank_Forms SET Blank_Form_Data = ? WHERE Blank_Form_Name = ?", [req.body.json, req.body.formName])

    })
}