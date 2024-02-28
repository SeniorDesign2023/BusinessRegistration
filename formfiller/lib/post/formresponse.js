const util = require("util")

module.exports = async function formresponse(req, res) {

    console.log(util.inspect(req.body))

}