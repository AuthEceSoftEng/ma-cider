
import { myFetch } from '../utilities/helpers'

export const getGraph = (projectId, queryNum) => {
    return myFetch('/api/graphs/' + projectId, { query: { queryNum } })
}
