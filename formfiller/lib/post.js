const axios = require("axios")

export default function post(endpoint, body) {

    return axios.post("/post", {
        endpoint,
        ...body
    })

}

