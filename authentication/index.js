const jwt = require('jsonwebtoken');

const getToken = (data, privateKey = process.env.PRIVATE_KEY) => {
    return jwt.sign({ data }, privateKey);
}

const verifyToken = (token, privateKey = process.env.PRIVATE_KEY) => {
    try {
        return jwt.verify(token, privateKey);
    } catch (error) {
        console.error('error while verifying token', error)
        return
    }
}

module.exports = { getToken, verifyToken }