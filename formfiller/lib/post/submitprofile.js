
const database = require("../database")

module.exports = async function submitprofile(req, res) {
    try {
        const email = req.session.user['Email'];

        const results = await database.query('UPDATE Users SET First_Name = ?, Middle_Name = ?, Last_Name = ?, Phone = ?, Address = ?, Zip = ?, DoB = ? WHERE Email = ?', [req.body.firstName, req.body.middleName, req.body.lastName, req.body.phone, req.body.address, req.body.zipCode, req.body.dob, email]);

        console.log('Updated profile information:', results);

        res.json({redirect: "/mainpage"});
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({error: 'An error occurred while updating profile information.'});
    }
}
