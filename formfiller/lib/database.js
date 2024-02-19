const mysql = require("mysql")

db = undefined
const dbOptions = {
	host: "localhost",
	port: "13306",
	user: "dbuser",
	password: "userpass",
	database: "Form_Filler_DB"
}

function query(sql, data = []) {
	return new Promise((resolve, reject) => {
		db.query(sql, data, (err, res) => {
			if (err) 
				reject(err)
			else
				resolve(res)
		})
	})
} 

function execute(sql) {
	return new Promise((resolve, reject) => {
		db.execute(sql, (err, res) => {
			if (err) 
				reject(err)
			else
				resolve(res)
		})
	})
} 

function init() {
	
	console.log("database init start")

	db = mysql.createConnection(dbOptions)
	
	var connect = () => new Promise((resolve, reject) => {
		db.connect(err => {
			if (err)
				reject(err)
			else
				resolve(true)
		})
	})
	
	return connect().then(() => {

		console.log("db connected")
		
	})
	
}

module.exports = {
	query,
	execute,
	init
}