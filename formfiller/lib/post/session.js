const database = require("../database.js")

const TIMEOUT = 3000 //30 minutes 00 seconds

async function makeCookie(req, res, user, id = undefined) {

	record = await database.query("SELECT * FROM USER WHERE Email = ?", [user])
		
	var user = record[0]
	req.session.user = user
	
	/*if (id === undefined) {

		record = await insert("sessions", {
			userid: user.id,
			created: "NOW()"
		})
		
		id = record.insertId
		
	} else {
		
		record = await renew()

	}*/

	req.session.sid = id
	res.cookie("id", id)

	return (record.affectedRows == 1)
	
}

//Returns whether the session is still valid
async function check(id) {

	var record = await database.query(`SELECT * FROM sessions WHERE id = ${id}`)
	
	if (record.length == 0)
		return false
	
	var session = record[0]
	
	var created = session.created
	
	var diffRecord = await database.query(`SELECT NOW() - CAST('${created}' AS DATETIME)`)
	var diff = Object.values(diffRecord[0])[0]
	
	var expired = (diff > TIMEOUT)
	if (!expired) {
		renewSession(id)
	} /*else {
		//database.execute(`DELETE FROM sessions WHERE id = ${id}`)
	}*/
	
	return !expired
	
}

//Checks session
async function verify(req, res) {

	var id = req.cookies.id

	if (id === undefined) {
		return false
	}

	var valid = await session.check(id)
	
	if (valid) {
		if (req.session.user === undefined) {

			var record = await database.query(`SELECT * FROM sessions WHERE id = ${id}`)
			var user = record[0].userid

			record = await database.query("SELECT * FROM users WHERE id = ?", [user])
			req.session.user = record[0]
			req.session.sid = id

		}
	}

	return valid

}

//Checks session, auto-redirects to login screen if invalid
async function verifyAndRedirect(req, res) {
	
	
		
	if (id === undefined) {
		res.redirect(303, "/login")
	} else {
		
		var valid = await check(id)
		
		if (!valid) {
			res.redirect(303, "/login?err=session")
		} else {
			if (req.session.user === undefined) {

				var record = await database.query(`SELECT * FROM sessions WHERE id = ${id}`)
				var user = record[0].userid

				record = await database.query("SELECT * FROM users WHERE id = ?", [user])
				req.session.user = record[0]
				req.session.sid = id

			}
		}

		return valid
		
	}
}

function renewSession(id) {
	return database.execute(`UPDATE sessions SET created = NOW() WHERE id = ${id}`)
}

module.exports = {
	makeCookie,
	check,
	verify,
	verifyAndRedirect
}