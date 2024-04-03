const axios = require("axios").default

export function post(endpoint, body) {

    return axios.post("/post", {
        endpoint,
        ...body
    })

}

export function get(endpoint, query = {}) {
    
    const params = new URLSearchParams({
        endpoint,
        ...query
    }).toString()

    return axios.get(`/get?${params}`, {
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
        }
    }).catch(error => {
        
        if (!error.response)
            throw error;

        return error.response //change reject to resolve if server did return, let caller check the error via status

    })

}

export async function validateUser() {

    const res = await get("validateuser")

    if (res.status === 401) {
        return false
    }

    return true

}