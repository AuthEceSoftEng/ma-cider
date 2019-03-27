import { myFetch } from '../utilities/helpers'

export const getActivityById = id => {
    return myFetch('/api/activities/' + id)
}

export const getActivities = ({ query } = {}) => {
    return myFetch('/api/activities', { query: query })
}

export const createActivity = (body) => {
    return myFetch('/api/activities', {
        init: {
            method: 'POST',
            body: JSON.stringify(body)
        }
    })
}

export const editActivity = (id, body) => {
    return myFetch('/api/activities/' + id, {
        init: {
            method: 'PUT',
            body: JSON.stringify(body)
        }
    })
}

export const deleteActivity = id => {
    return myFetch('/api/activities/' + id, {
        init: {
            method: 'DELETE'
        }
    })
}