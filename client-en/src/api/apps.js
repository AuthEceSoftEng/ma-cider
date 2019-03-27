import { myFetch } from '../utilities/helpers'

export const getAppById = id => {
    return myFetch('/api/apps/' + id)
}

export const createApp = (body) => {
    return myFetch('/api/apps', {
        init: {
            method: 'POST',
            body: JSON.stringify(body)
        }
    })
}

export const editApp = (id, body) => {
    return myFetch('/api/apps/' + id, {
        init: {
            method: 'PUT',
            body: JSON.stringify(body)
        }
    })
}

export const getApps = ({ query } = {}) => {
    return myFetch('/api/apps', { query: query })
}