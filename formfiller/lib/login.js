const crypto = require("crypto");
const mysql = require("mysql");

const database = require("./database")
const session = require("./session.js")

module.exports = async function login(req, res) {

    if (await checkLogin(req.body.email, req.body.password)) {
        await session.makeCookie(req, res, req.body.email)
        res.json({redirect: "/mainpage"})
    } else
        res.json({redirect: "/login"})

}

function genPasswordHash(pass, salt) {
    return crypto.createHash("sha256")
        .update(pass)
        .update(salt)
        .digest();
}

async function getPassword(user) {
    
    var records = await database.query("SELECT Password FROM USER WHERE Email = ?", [user])
    if (records.length == 0)
        return undefined

    return records[0].Password

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