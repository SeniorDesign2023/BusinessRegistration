const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const next = require("next")
const util = require("util")

const dev = process.env.NODE_ENV !== "production"
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()

const database = require("./lib/database.js")
const dispatch = require("./lib/post-dispatch.js")


//const morgan = require('morgan');



nextApp.prepare().then(async () => {
	
	await database.init()

	const server = express()
	
	server.use(bodyParser.urlencoded({extended: true}))
	server.use(bodyParser.json())
	server.use(cookieParser())
	server.use(session({
		resave: false,
		saveUninitialized: false,
		secret: "123456"
	}))

	//server.use(morgan('dev'));
	
	server.get("/form", async (req, res) => {
		if (!req.query.id) 
			return res.status(404).send()

		var result = await database.query("SELECT * FROM Blank_Forms WHERE Blank_Form_ID = ?", [req.query.id])
		if (result.count == 0)
			return res.status(404).send()

		//console.log(util.inspect(result[0]))

		res.form = JSON.parse(result[0].Blank_Form_Data.toString())
		res.form.name = result[0].Blank_Form_Name
		res.form.id = req.query.id
		return nextApp.render(req, res, "/form", req.query)
	})

	server.get("/get", async (req, res) => {
		if (req.query.endpoint === "/fetchprofile") {
			console.log("fetchprofile")
			if (!req.session || !req.session.user || !req.session.user['Email']) {
				return res.status(404).json({ error: "User profile not found" });
			}
	
			const currentUserEmail = req.session.user['Email'];
			console.log(currentUserEmail);

			profile = await database.query("SELECT * FROM Users WHERE Email = ?", [currentUserEmail])

			return res.json(profile[0]);
		} else if (req.query.endpoint === "/fetchorganizations") {
			console.log("fetchorganizations")
			if (!req.session || !req.session.user || !req.session.user['Email']) {
				return res.status(404).json({ error: "User profile not found" });
			}
			
			const currentUserEmail = req.session.user['Email'];
			console.log(currentUserEmail);

			Orgs = await database.query("SELECT Organizations.*, 'Admin' AS Role FROM Organizations JOIN Admin_Org ON Organizations.Org_Tag = Admin_Org.Org_Tag WHERE Admin_Org.Email = ? UNION SELECT Organizations.*, 'Normal' AS Role FROM Organizations JOIN User_Org ON Organizations.Org_Tag = User_Org.Org_Tag WHERE User_Org.Email = ?;", [currentUserEmail, currentUserEmail])
			console.log(Orgs);
			return res.json(Orgs);

		} else {
			return res.status(404).json({ error: "Invalid endpoint" });
		}
	});

	server.post("/post", (req, res) => dispatch(req, res, handle))
	server.get('*', (req, res) => handle(req, res))

	server.listen(process.env.PORT || 3000, err => {
		if (err) throw err
		console.log(`Ready on port ${process.env.PORT || 3000}`)
	})
	
}).catch(e => {
	console.error(e.stack)
	process.exit(1)
})