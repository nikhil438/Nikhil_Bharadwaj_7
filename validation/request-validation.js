const isEmpty = (obj) => {
    if (!obj || obj === 'undefined' || obj === 'null') {
        return true
    }

    if (typeof obj === 'string' && obj.trim().length === 0) {
        return true
    }

    if (typeof obj === 'object') {
        if (obj instanceof Array) {
            return obj.length === 0
        } else {
            return Object.keys(obj).length === 0
        }
    }
    return false
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateUser = (user) => {
    if (isEmpty(user)) {
        return 'User id is null or empty'
    }
    if (!validateEmail(user)) {
        return 'Invalid user id'
    }
    return
}

module.exports = { isEmpty, validateUser }