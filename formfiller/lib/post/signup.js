const crypto = require("crypto")
const { Buffer } = require("buffer")

const session = require("../session")
const database = require("../database")

module.exports = async function signup(req, res) {

    var records = await database.query("SELECT * FROM Users WHERE Email = ?", [req.body.email])
    if (records.length > 0) {
        //Username already taken 
        res.json({redirect: "/signup", success: false, message: "There is already an account associated with this email"})
        return
    }

    await createAccount(req.body.email, req.body.password)
    await session.makeCookie(req, res, req.body.email)
    
    res.json({redirect: "/mainpage", success: true, message: "Your account has been created"})

}

function genPasswordHash(pass, salt) {
    return crypto.createHash("sha256")
        .update(pass)
        .update(salt)
        .digest()
}

function createAccount(un, pwd) {
 
    var salt = crypto.randomBytes(32)
    var hash = genPasswordHash(pwd, salt)
    
    var final = Buffer.concat([salt, hash], 64)

    return database.query('INSERT INTO Users (Email, Password) VALUES (?, ?)', [un, final])
        .then(results => console.log('Inserted into database:', results))
        
}