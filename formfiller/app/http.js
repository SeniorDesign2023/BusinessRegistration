const axios = require("axios")

import {redirect as redir} from "next/navigation"

export function post(endpoint, body) {

    return axios.post("/post", {
        endpoint,
        ...body
    })

}