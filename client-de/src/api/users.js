import { myFetch } from '../utilities/helpers'

export const loginAPI = (username, password) => {
    return myFetch('/api/users/authenticate', {
        init: {
            method: 'POST',
            body: JSON.stringify({
                username: username, password: password
            })
        },
        withToken: false
    })
}

export const registerAPI = (username, password) => {
    return myFetch('/api/users', {
        init: {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            })
        },
        withToken: false
    })
}

export const getUsers = ({ query } = {}) => {
    return myFetch('/api/users', {
        query: query,
    })
}
