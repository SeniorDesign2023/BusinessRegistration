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
const postDispatch = require("./lib/post-dispatch.js")
const getDispatch = require("./lib/get-dispatch.js")


const morgan = require('morgan');



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

	server.use(morgan('dev'));
	
	server.get("/form", async (req, res) => {
		console.log("  Got /form request")

		id = req.query.id

		if (!id) 
			return res.status(404).send()

		if (!req.session || !req.session.user)
			return res.status(401).send()

		var result = await database.query("SELECT * FROM Blank_Forms WHERE Blank_Form_ID = ?", [req.query.id])
		if (result.count == 0)
			return res.status(404).send()

		res.form = JSON.parse(result[0].Blank_Form_Data.toString())
		res.form.name = result[0].Blank_Form_Name
		res.form.id = id
		res.form.tag = result[0].Org_Tag

		if (req.session.formDataCache) {
			res.form.data = req.session.formDataCache.find(ob => ob.Blank_Form_ID === id)
		} else {
			var userRecord = (await database.query("SELECT * FROM Users WHERE Email = ?", [req.session.user.Email]))[0]
			var autofill = {}

			for ([entry, value] of Object.entries(userRecord)) {
				
				if (entry === "Password")
					continue

				if (value) {
					autofill[entry] = value
				}

			}

			console.log(autofill)

			res.form.data = autofill
		}

		console.log("  Rendering /form")
		return nextApp.render(req, res, "/form", req.query)
	})

	server.get("/get", async (req, res) => getDispatch(req, res, handle));
	server.post("/post", (req, res) => postDispatch(req, res, handle))

	server.get('*', (req, res) => handle(req, res))

	server.listen(process.env.PORT || 3000, err => {
		if (err) throw err
		console.log(`Ready on port ${process.env.PORT || 3000}`)
	})
	
}).catch(e => {
	console.error(e.stack)
	process.exit(1)
})