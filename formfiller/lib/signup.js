// const mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: "13306",
//     user: "dbuser",
//     password: "userpass",
//     database: "Form_Filler_DB"
// });

//connection.connect();

const crypto = require("crypto")
const { Buffer } = require("buffer")

import { makeCookie } from "./session";
import { query } from "./database"

export default async function signup(req, res) {

    var records = query("SELECT * FROM USER WHERE Email = ?", [user])
    if (records.length > 0) {
        res.redirect(303, "/signup")
    }

    await createAccount(req.body.email, req.body.password)
    await makeCookie(req, res, req.body.email)
    
    res.redirect(303, "/homepage")

}

function genPasswordHash(pass, salt) {
    return crypto.createHash("sha256")
        .update(pass)
        .update(salt)
        .digest()
}

async function createAccount(un, pwd) {
 
    var salt = crypto.randomBytes(32)
    var hash = genPasswordHash(pwd, salt)
    
    var final = Buffer.concat([salt, hash], 64)

    return query('INSERT INTO USER (Email, Password) VALUES (?, ?)', [un, final], function (error, results, fields) {
        if (error) throw error;
        console.log('Inserted into database:', results);
      });
    
}

/*function main() {
    try {
        gentestacc("123@123.com","456")
    } catch (error) {
        console.error(error);
    } finally {
        connection.end();
    }
}


main()*/