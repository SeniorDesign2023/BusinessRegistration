import {execute, insert, query} from "./database"

const TIMEOUT = 3000 //30 minutes 00 seconds

export async function makeCookie(req, res, user, id = undefined) {

	record = await query("SELECT * FROM User WHERE Email = ?", [user])
		
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
export async function check(id) {

	var record = await query(`SELECT * FROM sessions WHERE id = ${id}`)
	
	if (record.length == 0)
		return false
	
	var session = record[0]
	
	var created = session.created
	
	var diffRecord = await query(`SELECT NOW() - CAST('${created}' AS DATETIME)`)
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
export async function verifySession(req, res) {

	var id = req.cookies.id

	if (id === undefined) {
		return false
	}

	var valid = await check(id)
	
	if (valid) {
		if (req.session.user === undefined) {

			var record = await query(`SELECT * FROM sessions WHERE id = ${id}`)
			var user = record[0].userid

			record = await query("SELECT * FROM users WHERE id = ?", [user])
			req.session.user = record[0]
			req.session.sid = id

		}
	}

	return valid

}

//Checks session, auto-redirects to login screen if invalid
export async function verifySessionAndRedirect(req, res) {
	
	
		
	if (id === undefined) {
		res.redirect(303, "/login")
	} else {
		
		var valid = await check(id)
		
		if (!valid) {
			res.redirect(303, "/login?err=session")
		} else {
			if (req.session.user === undefined) {

				var record = await query(`SELECT * FROM sessions WHERE id = ${id}`)
				var user = record[0].userid

				record = await query("SELECT * FROM users WHERE id = ?", [user])
				req.session.user = record[0]
				req.session.sid = id

			}
		}

		return valid
		
	}
}

export function renewSession(id) {
	return execute(`UPDATE sessions SET created = NOW() WHERE id = ${id}`)
}