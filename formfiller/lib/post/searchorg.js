const database = require("../database")

module.exports = async function seachorg(req, res) {
    search = req.body.organization
    let currentUser = req.session.user['Email']

    result = await database.query("SELECT * FROM Organizations WHERE Org_Tag LIKE ?", [search])

    //console.log("attempting to join " + result[0].Org_Tag);

    if(result.length > 0) {
        console.log("attempting to join " + result[0].Org_Tag);

        //Check if already a member or admin
        checkmem = await database.query("SELECT * FROM User_Org WHERE Email = ? AND Org_Tag = ?", [currentUser, result[0].Org_Tag])
        checkadmin = await database.query("SELECT * FROM Admin_Org WHERE Email = ? AND Org_Tag = ?", [currentUser, result[0].Org_Tag])

        //console.log(checkmem.length + " " + checkadmin.length);

        if(checkmem.length + checkadmin.length > 0){
            //aleady in org
            res.json({success: false, message: "You are aleady a member of this Organization"});
            return;
        }

        await database.query("INSERT INTO User_Org (Email, Org_Tag) VALUES (?, ?)", [currentUser, result[0].Org_Tag]) 
        res.json({success: true, message: "Joined organization"});
        return;
    }
    else {
        res.json({success: false, message: "No Organization Found"});
        return;
    }

}