import { myFetch } from '../utilities/helpers'

export const getParticipantById = id => {
    return myFetch('/api/participants/' + id)
}

export const getParticipants = ({ query } = {}) => {
    return myFetch('/api/participants', { query: query })
}

export const createParticipant = (body) => {
    return myFetch('/api/participants', {
        init: {
            method: 'POST',
            body: JSON.stringify(body)
        }
    })
}

export const editParticipant = (id, body) => {
    return myFetch('/api/participants/' + id, {
        init: {
            method: 'PUT',
            body: JSON.stringify(body)
        }
    })
}

export const deleteParticipant = id => {
    return myFetch('/api/participants/' + id, {
        init: {
            method: 'DELETE'
        }
    })
}