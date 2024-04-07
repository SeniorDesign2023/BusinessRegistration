const database = require("../database")

module.exports = async function fetchOrgForms(req, res) {

    if (!req.query.mode)
        req.query.mode = "all"
    
    console.log(req.query)
    const tag = req.query.org

    const allForms = await database.query("SELECT * FROM Blank_Forms WHERE Org_Tag = ?", [tag])
    var user = req.session.user.Email

    // res.json({})
    // return

    switch (req.query.mode) {
    
    case "assigned":
        
        const assigned = await database.query("SELECT Blank_Form_ID FROM Assigned_Forms WHERE Email = ?", [user])

        req.session.formDataCache = undefined
        res.json(allForms.filter(form => assigned.find(assign => assign.Blank_Form_ID === form.Blank_Form_ID)))
        break

    case "submitted":
        
        const submitted = await database.query("SELECT Blank_Form_ID, Form_Data, Completed FROM Forms WHERE Email = ?", [user])

        req.session.formDataCache = submitted
        res.json(allForms.filter(form => submitted.find(submit => submit.Blank_Form_ID === form.Blank_Form_ID && submit.Completed === "Complete")))
        break
    
    case "draft":

        const drafts = await database.query("SELECT Blank_Form_ID, Form_Data, Completed FROM Forms WHERE Email = ?", [user])

        req.session.formDataCache = drafts
        res.json(allForms.filter(form => drafts.find(draft => draft.Blank_Form_ID === form.Blank_Form_ID && draft.Completed === "Incomplete")))
        break

    case "all":
    default:
        req.session.formDataCache = undefined
        res.json(allForms)
        break

    }

    //console.log(results)

    //res.json(results)

}