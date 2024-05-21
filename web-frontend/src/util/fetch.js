const u = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/'

function request(url, options = {}) {
    return fetch(u + url, options)
        .then(response => response.json())
        .then(data => {return data.data})
}

export function get(url,pa='') {
    return request(url+pa,{
        method: 'GET'
    })
}

export function post(url, data = {}) {
    return request(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}

export function put(url,pa, data = {}) {
    return request(url+pa, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}

export function Delete(url,params='') {
    return request(url + params,{
        method: 'DELETE'
    })
}
