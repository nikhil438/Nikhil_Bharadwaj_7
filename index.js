const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const { validateUser } = require('./validation/request-validation')
const { getUserMeetups, searchMeetups } = require('./services/meetups')
const app = express()

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(bodyparser.json())

app.use(async (req, res, next) => {
    const token = req.headers.authorization
    if (!token || token.trim().length === 0) {
        return res.status(401).send({ error: 'AUTHENTICATION_FAILED', message: `Token doesn't exist` })
    }
    next()
})

app.get('/meetups/:userId', async (req, res) => {
    const { userId } = req.params
    const errMsg = validateUser(userId)
    if (errMsg) {
        res.status(400).json({ message: errMsg })
    }
    res.json(await getUserMeetups(userId))
})

app.post('/meetups/search', async (req, res) => {
    const criteria = req.body
    res.json(await searchMeetups(criteria))
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})