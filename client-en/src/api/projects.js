import { myFetch } from '../utilities/helpers'

export const getProjectById = id => {
    return myFetch('/api/projects/' + id)
}

export const getProjects = ({ query } = {}) => {
    return myFetch('/api/projects', { query: query })
}

export const createProject = (body) => {
    return myFetch('/api/projects', {
        init: {
            method: 'POST',
            body: JSON.stringify(body)
        }
    })
}

export const editProject = (id, body) => {
    return myFetch('/api/projects/' + id, {
        init: {
            method: 'PUT',
            body: JSON.stringify(body)
        }
    })
}

export const deleteProject = id => {
    return myFetch('/api/projects/' + id, {
        init: {
            method: 'DELETE'
        }
    })
}
