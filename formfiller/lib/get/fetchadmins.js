const database = require("../database")

module.exports = async function fetchAdmins(req, res) {

    const tag = req.query.orgName; 
    if (!tag) {
        return res.status(400).json({ error: "Organization name is required" });
    }
    const admins = await database.query("SELECT Email FROM Admin_Org WHERE Org_Tag = ?", [tag]);
    console.log(admins)
    return res.json(admins);
    
}