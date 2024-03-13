const database = require("../database")

module.exports = async function createorg(req, res) {

    //console.log("here")
    var records = await database.query("SELECT * FROM Organizations WHERE Org_Tag = ?", [req.body.tag])
    if (records.length > 0) {
        //if tag is already taken
        res.json({redirect: "/mainpage"})
        return
    }
    //console.log(String(res.body.aboutOrg))
    //await createOrganization(req.body.tag, req.body.organizationName, req.body.aboutOrg)
    
    //Create Organization
    if(req.body.aboutOrg == '') {
        await createOrganization(req.body.tag, req.body.organizationName)
    }
    else {
        await createOrganization(req.body.tag, req.body.organizationName, req.body.aboutOrg)
    }
    
    //Add Members
    if(req.body.organizationMembers != ''){
        let emails = parseEmails(req.body.organizationMembers)
        console.log(emails)

        for (let email of emails) {
            console.log(email)
            addUser(req.body.tag, email)
        }

    }
    
    res.json({redirect: "/mainpage"})

}

function createOrganization(tag, name) {
    return database.query('INSERT INTO Organizations (Org_Tag, Org_Name) VALUES (?, ?)', [tag, name])
    .then(results => console.log('Inserted into database:', results))
}

function createOrganization(tag, name, about) {
    return database.query('INSERT INTO Organizations (Org_Tag, Org_Name, About_Org) VALUES (?, ?, ?)', [tag, name, about])
    .then(results => console.log('Inserted into database:', results))
}


function parseEmails(emailString) {
    emailString = emailString.replace(/\s/g, '');
    var emails = emailString.split(',');
    emails = emails.map(email => email.trim());
    return emails;
}

async function addUser(tag, user) {

    //still need to add handeling for email not found. Will do later
    return database.query('INSERT INTO User_Org (Org_Tag, Email) VALUES (?, ?)', [tag, user])
    .then(results => console.log('Inserted into database:', results))
}