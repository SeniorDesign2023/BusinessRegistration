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

const getDispatch = require("./lib/get-dispatch.js")
const postDispatch = require("./lib/post-dispatch.js")

const validate = require("./lib/get/validateuser.js")

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
		res.form.tag = result[0].Org_Tag
		res.form.name = result[0].Blank_Form_Name
		res.form.id = req.query.id
		return nextApp.render(req, res, "/form", req.query)
	})

	defaultHandle = (req, res) => handle(req, res)

	server.get("/get", async (req, res) => getDispatch(req, res, handle));
	server.post("/post", (req, res) => postDispatch(req, res, handle))

	server.get("/homepage", defaultHandle)
	server.get("/login", defaultHandle)
	server.get("/signup", defaultHandle)
	
	server.get('*', (req, res) => {

		//if (validate(req, res, true))
			handle(req, res)

	})

	server.listen(process.env.PORT || 3000, err => {
		if (err) throw err
		console.log(`Ready on port ${process.env.PORT || 3000}`)
	})
	
}).catch(e => {
	console.error(e.stack)
	process.exit(1)
})