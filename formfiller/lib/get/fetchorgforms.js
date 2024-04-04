const database = require("../database")

module.exports = async function fetchOrgForms(req, res) {

    if (!req.query.mode)
        req.query.mode = "all"
    
    console.log(req.query)
    const tag = req.query.org

    const allForms = await database.query("SELECT * FROM Blank_Forms WHERE Org_Tag = ?", [tag])

    res.json({})
    return

    switch (req.query.mode) {
    
    case "assigned":
        
        var user = req.session.user.Email
        var assigned = await database.query("SELECT Blank_Form_ID FROM Assigned_Forms WHERE Email = ?", [user])
        console.log(assigned)

        results = await database.query("SELECT * FROM Blank_Forms WHERE Org_Tag = ?", [tag])
        break

    case "submitted":
        break
    
    case "draft":
        break

    case "all":
    default:
        res.json(allForms)
        break

    }

    //console.log(results)

    //res.json(results)

}