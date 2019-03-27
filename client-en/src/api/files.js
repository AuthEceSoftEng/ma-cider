import { myFetch, openModalPdfViewer } from '../utilities/helpers'

export const downloadFile = filename => {
    return myFetch('/api/files/download/' + filename);
}

export const downloadResourceFile = fileName => {
    openModalPdfViewer(`/data/resources/${fileName}.pdf`)
    // return myFetch('/api/files/download-resource/' + fileId, { query: { fileName }, withToken: false });
}
