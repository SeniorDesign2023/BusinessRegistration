const database = require("../database")

module.exports = async function addadmin(req, res) {
    Email = req.body.newAdmin;
    Org_Tag = req.body.tag;

    //check if user exists
    checkuser = await database.query("SELECT * FROM Users WHERE Email = ?", [Email]);
    console.log(checkuser.length);
    if(checkuser.length == 0) {
        res.json({success: false});
        return;
    }

    //check if user is already an admin
    checkadmin = await database.query("SELECT * FROM Admin_Org WHERE Email = ? AND Org_Tag = ?", [Email, Org_Tag]);
    console.log("Checkadmin " + checkadmin.length);
    if(checkadmin.length == 1) {
        res.json({success: false});
        return;
    }

    //check if user is a member
    checkmember = await database.query("SELECT * FROM User_Org WHERE Email = ? AND Org_Tag = ?", [Email, Org_Tag]);
    console.log("Checkmember " + checkadmin.length);
    if(checkmember.length == 1) {

        await database.query("DELETE FROM User_Org WHERE Email = ? AND Org_Tag = ?", [Email, Org_Tag]);
        await database.query("INSERT INTO Admin_Org (Email, Org_Tag) VALUES (?, ?)", [Email, Org_Tag]);

        res.json({success: true});
        return;
    }

    await database.query("INSERT INTO Admin_Org (Email, Org_Tag) VALUES (?, ?)", [Email, Org_Tag]);
    res.json({success: true});
    return;
}