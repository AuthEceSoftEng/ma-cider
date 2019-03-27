import { myFetch } from '../utilities/helpers'

export const downloadFile = filename => {
    return myFetch('/api/files/download/' + filename);
}

export const downloadResourceFile = fileId => {
    return myFetch('/api/files/download-resource/' + fileId, { withToken: false });
}
