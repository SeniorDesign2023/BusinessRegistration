const database = require("../database")

module.exports = async function createorg(req, res) {

    //console.log("here")
    var records = await database.query("SELECT * FROM Organizations WHERE Org_Tag = ?", [req.body.tag])
    if (records.length > 0) {
        //if tag is already taken
        res.json({redirect: "/mainpage"})
        return
    }

    await createOrganization(req.body.tag, req.body.organizationName)
    //await addUsers(req.body.users)
    
    res.json({redirect: "/mainpage"})

}

function createOrganization(tag, name) {
    return database.query('INSERT INTO Organizations (Org_Tag, Org_Name) VALUES (?, ?)', [tag, name])
    .then(results => console.log('Inserted into database:', results))
}



function addUsers() {

}