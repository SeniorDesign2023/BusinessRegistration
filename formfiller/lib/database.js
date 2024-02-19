const mysql = require("mysql")

db = undefined
const dbOptions = {
	host: "localhost",
	port: "13306",
	user: "dbuser",
	password: "userpass",
	database: "Form_Filler_DB"
}

function csl(items) { //comma-separated list

	var str = ""
	var first = true

	for (var item of items) {

		if (!first) 
			str += ", "
		else 
			first = false
		
		str += `${item}`

	}

	return str

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

function insert(table, record) {
	
	var keys = Object.keys(record)
	var values = Object.values(record)

	var keystr = csl(keys)
	var valstr = csl(values)
	
	var sql = `INSERT INTO ? (?) VALUES (?)`
	
	return query(sql, [table, keystr, valstr]) 
}

/*function initTable(name, rows) {
	var sql = "CREATE TABLE IF NOT EXISTS " + name + "(" 
	sql += "id INT AUTO_INCREMENT PRIMARY KEY"
	
	for (row of rows) {	
		
		sql += ", " + row
	
	}
	
	sql += ");"
	
	return execute(sql)
}*/

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
	insert,
	init
}