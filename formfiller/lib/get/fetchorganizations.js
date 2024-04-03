const database = require("../database")
const validate = require("./validateuser")

module.exports = async function fetchOrgs(req, res) {

    if (!validate(req, res))
        return;

    const currentUserEmail = req.session.user['Email'];
    //console.log(currentUserEmail);

    Orgs = await database.query("SELECT Organizations.*, 'Admin' AS Role FROM Organizations JOIN Admin_Org ON Organizations.Org_Tag = Admin_Org.Org_Tag WHERE Admin_Org.Email = ? UNION SELECT Organizations.*, 'Normal' AS Role FROM Organizations JOIN User_Org ON Organizations.Org_Tag = User_Org.Org_Tag WHERE User_Org.Email = ?;", [currentUserEmail, currentUserEmail])
    //console.log(Orgs);
    return res.json(Orgs);

}