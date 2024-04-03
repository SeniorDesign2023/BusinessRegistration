const database = require("../database")
const validate = require("./validateuser")

module.exports = async function fetchProfile(req, res) {
    
    if (!validate(req, res))
        return;    

    const currentUserEmail = req.session.user['Email'];
    console.log(currentUserEmail);

    profile = await database.query("SELECT * FROM Users WHERE Email = ?", [currentUserEmail])

    return res.json(profile[0]);
    
}