const database = require("../database")

module.exports = async function createform(req, res) {
    
    var tag = req.body.org //await database.query("SELECT Org_Tag FROM Organizations WHERE Org_Name = ?", req.body.org)
    var existing = await database.query("SELECT * FROM Blank_Forms WHERE (Blank_Form_Name = ? AND Org_Tag = ?)", [req.body.formName, tag])
    
    res.status(201).send()

    if (existing.length == 0)
        return database.query("INSERT INTO Blank_Forms (Blank_Form_Name, Blank_Form_Data, Org_Tag) VALUES (?, ?, ?)", [req.body.formName, req.body.json, tag])
    else
        return database.query("UPDATE Blank_Forms SET Blank_Form_Data = ? WHERE (Blank_Form_Name = ? AND Org_Tag = ?)", [req.body.json, req.body.formName, tag])

}