const axios = require("axios").default

import {redirect as redir} from "next/navigation"

export function post(endpoint, body) {

    return axios.post("/post", {
        endpoint,
        ...body
    })

}

export function get(endpoint, query) {
    
    return axios.get("/get", {
        params: {
            endpoint,
            ...query
        }
    })

}