import {login} from "./login"
import {signup} from "./signup"
import {verifyAndRedirect} from "./session"

const table = {
    login,
    signup,
    verifyAndRedirect
}

export default function dispatch(req, res, nextHandle) {

    var endpoint = req.body.endpoint

    if (!endpoint) {
        res.status("400").send({message: "No POST endpoint specified"})
        return
    }

    return table[endpoint]()

}