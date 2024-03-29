const database = require("./database.js")

const TIMEOUT = 3000 //30 minutes 00 seconds

async function makeCookie(req, res, user, id = undefined) {

	record = await database.query("SELECT * FROM Users WHERE Email = ?", [user])
		
	var user = record[0]
	req.session.user = user
	req.session.sid = id
	res.cookie("id", id)

	return (record.affectedRows == 1)
	
}


module.exports = {
	makeCookie,
}