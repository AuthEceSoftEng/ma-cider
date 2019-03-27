import { message, notification } from 'antd'
import { REQUIRED_FIELDS } from './data'
import FileSaver from 'file-saver';
import ReactGA from 'react-ga';

const DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

export const isUserLoggedIn = () => {
    try {
        let token = localStorage.getItem('token');
        if (token && token !== '') {
            // console.log('logged in')
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const logoutUser = () => {
    localStorage.removeItem('token');
    window.location.pathname = '/';
}

export const getMyUsername = () => {
    try {
        let user = localStorage.getItem('user');
        return JSON.parse(user).username;
    } catch (error) {
        console.log(error);
    }
}

export const getMyUser = () => {
    try {
        let user = localStorage.getItem('user');
        return JSON.parse(user);
    } catch (error) {
        console.log(error);
    }
}

export const getMyRole = () => {
    try {
        let user = localStorage.getItem('user');
        return JSON.parse(user).role;
    } catch (error) {
        console.log(error);
    }
}

export const myFetch = (input, { init, query, withToken = true } = {}) => {
    const isDownload = input.includes('/api/files/download') || input.includes('/api/files-resource/download');
    const headers = { ...DEFAULT_HEADERS, ...withToken ? { 'x-access-token': getMyToken() } : {} }
    if (isDownload) {
        notification.info({
            message: 'Your download will start soon...',
            description: '',
            duration: 1.5,
            placement: 'bottomRight'
        })
    }
    return new Promise((resolve, reject) => {
        fetch(input + jsonToQuery(query), { ...init, headers })
            .then(response => {
                if (!response.ok) {
                    return response.json()
                        .then(badErr => {
                            return Promise.reject(badErr);
                        })
                        .catch(_err => {
                            return Promise.reject(_err);
                        })
                } else {
                    return isDownload
                        ? Promise.all([false, response.blob()])
                        : Promise.all([true, response.json()]);
                }
            })
            .then(([isJson, data]) => {
                if (isJson) {
                    resolve(data);
                } else {
                    const tmp = input.split('/')
                    FileSaver.saveAs(data, tmp[tmp.length - 1]);
                    resolve(true)
                }

            })
            .catch(err => {
                console.log(err);
                let _message = 'Error occurred.';
                if (err.message) {
                    _message = err.message;
                } else if (err.error.message) {
                    _message = err.error.message;
                } else if (err.errors && err.errors.length > 0 && err.errors[0].message) {
                    _message = err.errors[0].msg;
                }
                message.error(_message, 10)
                reject(err);
            })
    })
}

export const queryToJson = queryString => {
    if (queryString.indexOf('?') > -1) {
        queryString = queryString.split('?')[1];
    }
    var pairs = queryString.split('&');
    var result = {};
    pairs.forEach(function (pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return result;
}

export const getMyToken = () => {
    try {
        let token = localStorage.getItem('token');
        if (token && token !== '') {
            return token
        } else {
            message.error('You are not logged in');
            logoutUser();
        }
    } catch (error) {
        message.error('You are not logged in');
        logoutUser();
    }
}

export const jsonToQuery = (obj) => {
    if (typeof obj === 'string') {
        return obj;
    }
    if (!obj) {
        return '';
    }
    const ret = Object.keys(obj).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
    }).join('&')
    return ret !== '' ? ('?' + ret) : ret;
}

export const paramArrayToQuery = (param, array) => {
    let ret = '?'
    array.forEach((val, i) => {
        ret += i < array.length - 1 ? `${param}=${val}&` : `${param}=${val}`
    })
    return ret;
}

export const flattenArray = (arr) => {
    let result = [];
    arr.forEach(function ($val) {
        if (Array.isArray($val)) {
            result = result.concat(flattenArray($val));
        } else {
            result.push($val);
        }
    });
    return result;
}

export const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export const isRequiredField = (model, field) => {
    return REQUIRED_FIELDS[model].includes(field);
}

export const containsFileUri = obj => {
    return obj.file && obj.file.response && obj.file.response.uri ? true : false
}

export const makeFilterOptionsForActivities = activities => {
    return {
        typeFilters: Array.from(new Set(activities.map(a => a.type))).map(t => ({ text: t, value: t })),
        locationFilters: Array.from(new Set(activities.map(a => a.location))).map(l => ({ text: l, value: l })),
        substageFilters: Array.from(new Set(flattenArray(activities.map(a => a.substage)))).map(s => ({ text: s, value: s }))
    }
}

export const initializeReactGA = () => {
    ReactGA.initialize('UA-130489544-1');
}

export const trackPage = (page, options = {}) => {
    ReactGA.set({
        page,
        ...options
    });
    ReactGA.pageview(page);
}

export const removeBaseHref = pathname => {
    const s = pathname.split('/');
    s.splice(1, 1);
    return s.join('/')
}