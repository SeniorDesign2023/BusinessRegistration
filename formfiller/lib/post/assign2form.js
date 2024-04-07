const database = require("../database")

module.exports = async function assign2form(req, res) {
    Blank_Form_ID = req.body.id;
    Email = req.body.member;

    //check if user exist
    checkuser = await database.query("SELECT * FROM Users WHERE Email = ?", [Email]);
    console.log(checkuser.length);
    if(checkuser.length == 0) {
        res.json({success: false, message: "Email does not exist"});
        return;
    }


    //check if form is already assigned to form

    checkassign = await database.query("SELECT * FROM Assigned_Forms WHERE Email = ? AND Blank_Form_ID = ?", [Email, Blank_Form_ID]);
    console.log(checkassign.length);
    if(checkassign.length > 0) {
        res.json({success: false, message: "User is already assigned to this form"});
        return;
    }
    //add user to form
    await database.query("INSERT INTO Assigned_Forms (Email, Blank_Form_ID) VALUES (?, ?)", [Email, Blank_Form_ID]);
    res.json({success: true, message: "Assigned user to form"});
    return;
}