const database = require("../database")

module.exports = async function fetchMembers(req, res) {

    const tag = req.query.orgName; 

    if (!tag) {
        return res.status(400).json({ error: "Organization tag is required" });
    }
    
    const members = await database.query("SELECT Email FROM User_Org WHERE Org_Tag = ?", [tag]);
    console.log(members)
    return res.json(members);

}
