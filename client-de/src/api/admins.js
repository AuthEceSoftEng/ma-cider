import { myFetch } from '../utilities/helpers'

export const putUser = (userId, body) => {
    return myFetch('/api/admins/user/' + userId, {
        init: {
            method: 'PUT',
            body: JSON.stringify(body)
        }
    })
}
