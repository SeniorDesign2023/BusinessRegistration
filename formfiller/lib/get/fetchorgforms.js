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
        
        const submitted = await database.query("SELECT * FROM Forms WHERE Email = ? AND Completed = ?", [user, "Complete"])
        req.session.formDataCache = submitted

        const srelevant = allForms.filter(form => submitted.find(submit => submit.Blank_Form_ID === form.Blank_Form_ID && submit.Completed === "Complete"))
        var sarr = []

        //console.log(submitted)

        for (var i = 0; i < submitted.length; i++) {
            var form = submitted[i]
            //console.log(form)
            var rform = {...srelevant.find(rel => rel.Blank_Form_ID === form.Blank_Form_ID)} //so *this* is what it takes to make rform not change the other values of the array when pushed?
            rform.fid = form.FormID
            sarr.push(rform)
        }

        //console.log(sarr)

        res.json(sarr)
        break
    
    case "draft":

        const drafts = await database.query("SELECT * FROM Forms WHERE Email = ? AND Completed = ?", [user, "Incomplete"])
        req.session.formDataCache = drafts

        const drelevant = allForms.filter(form => drafts.find(draft => draft.Blank_Form_ID === form.Blank_Form_ID))
        var darr = []

        for (var i = 0; i < drafts.length; i++) {
            var form = drafts[i]
            var rform = {...drelevant.find(rel => rel.Blank_Form_ID === form.Blank_Form_ID)}
            rform.fid = form.FormID
            darr.push(rform)
        }

        res.json(darr)
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