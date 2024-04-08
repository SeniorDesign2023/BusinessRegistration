const database = require("../database")

module.exports = async function fetchResponses(req, res) {

    var [allResponses, blank] = await Promise.all([
        database.query("SELECT * FROM Forms WHERE Blank_Form_ID = ? AND Completed = ?", [req.query.formID, "Complete"]),
        database.query("SELECT Blank_Form_Data FROM Blank_Forms WHERE Blank_Form_ID = ?", [req.query.formID])
    ])

    console.log(allResponses)

    blank = JSON.parse(blank[0].Blank_Form_Data).schema.properties

    res.json(allResponses.map(row => {

        const resp = JSON.parse(row.Form_Data)

        console.log()
        console.log(resp)
        console.log(blank)
        console.log()

        var data = {}

        for (const [key, value] of Object.entries(resp)) {
            if (key in blank) { //unused profile data is also stored in response
                data[key] = value
            }
        }

        return {email: resp.Email, data}

    }))

}