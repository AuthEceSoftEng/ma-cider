import { myFetch } from '../utilities/helpers'

export const createFeedback = (body) => {
    return myFetch('/api/feedback', {
        init: {
            method: 'POST',
            body: JSON.stringify(body)
        },
        withToken: false
    })
}