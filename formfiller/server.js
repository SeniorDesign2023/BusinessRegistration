const express = require("express")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
	
	const server = express()
	
	server.get('*', (req, res) => handle(req, res))
	
	server.listen(process.env.PORT || 3000, err => {
		if (err) throw err
		console.log(`Ready on port ${process.env.PORT || 3000}`)
	})
	
}).catch(e => {
	console.error(e.stack)
})