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
	
	server.get("/form", async (req, res) => {
		
		var result = await database.query("SELECT From_Data FROM Forms WHERE Form_Name = ?", ["__test"])
		if (result.count == 0)
			return res.status(404).send()

		res.form = JSON.parse(result[0].From_Data.toString())
		return nextApp.render(req, res, "/form", req.query)
	})

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