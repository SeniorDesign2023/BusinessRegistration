const database = require("../database");

module.exports = async function fetchassign(req, res) {
    const id = req.query.formID; 
    try {
        const emails = await database.query(`
            SELECT Email
            FROM Assigned_Forms
            WHERE Blank_Form_ID = ?
        `, [id]);

        res.json(emails);
    } catch (error) {
        // Handle error
        console.error("Error fetching emails:", error);
        res.status(500).json({ error: "An error occurred while fetching emails." });
    }
}
