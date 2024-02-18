const express = require("express")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()

import {init} from "./lib/database"
import dispatch from "./lib/post-dispatch"

nextApp.prepare().then(async () => {
	
	await init()

	const server = express()
	
	server.post("/post", (req, res) => dispatch(req, res, handle))
	server.get('*', (req, res) => handle(req, res))

	server.use(cookieParser())
	server.use(session({
		resave: false,
		saveUninitialized: false,
		secret: credentials.cookieSecret
	}))
	
	server.listen(process.env.PORT || 3000, err => {
		if (err) throw err
		console.log(`Ready on port ${process.env.PORT || 3000}`)
	})
	
}).catch(e => {
	console.error(e.stack)
})