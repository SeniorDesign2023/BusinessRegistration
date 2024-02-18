const crypto = require("crypto");
const mysql = require("mysql");

import {query} from "./database"
import {makeCookie} from "./session"

export function login(req, res) {

    if (checkLogin(req.body.email, req.body.password)) {
        makeCookie(req, res, req.body.email)
        res.redirect(303, "/homepage")
    } else
        res.redirect(303, "/login")

}

function genPasswordHash(pass, salt) {
    return crypto.createHash("sha256")
        .update(pass)
        .update(salt)
        .digest();
}

/*return new Promise((resolve, reject) => {
        connection.query("SELECT Password FROM USER WHERE Email = ?", [user], function (err, result, fields) {
            if (err) reject(err);
            if (result.length > 0) {
                resolve(result[0].Password);
            } else {
                resolve(undefined);
            }
        });
    });*/

async function getPassword(user) {
    
    var records = await query("SELECT Password FROM USER WHERE Email = ?", [user])
    if (records.length < 0)
        return undefined

    return result[0].Password

}

async function checkLogin(user, pass) {

    try {

        const raw = await getPassword(user);
        if (!raw) return false;

        if (raw.length !== 64) {
            throw new Error("Raw hash is not a 64-byte value!");
        }

        const salt = raw.slice(0, 32);
        const hash = raw.slice(32, 64);

        const testHash = genPasswordHash(pass, salt);

        return testHash.equals(hash);
        
    } catch (error) {
        throw error;
    }

}

/*async function main() {
    try {
        const result = await checkLogin("123@123.com", "456");
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        connection.end();
    }
}

main();*/
