const database = require("../database")

module.exports = async function fetchOrgForms(req, res) {

    if (!req.query.mode)
        req.query.mode = "all"
    
    console.log(req.query)
    const tag = req.query.org

    const allForms = await database.query("SELECT * FROM Blank_Forms WHERE Org_Tag = ?", [tag])

    // res.json({})
    // return

    switch (req.query.mode) {
    
    case "assigned":
        
        var user = req.session.user.Email
        var assigned = await database.query("SELECT Blank_Form_ID FROM Assigned_Forms WHERE Email = ?", [user])
        console.log(assigned)

        res.json(allForms.filter(form => assigned.find(assign => assign.Blank_Form_ID === form.Blank_Form_ID)))
        break

    case "submitted":
        res.json(allForms)
        break
    
    case "draft":
        res.json(allForms)
        break

    case "all":
    default:
        res.json(allForms)
        break

    }

    //console.log(results)

    //res.json(results)

}