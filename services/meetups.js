const MeetupsError = require('../errors/meetups-error')
const { validateUser } = require('../validation/request-validation')
const { getMeetups } = require('../repo/meetups')

const getUserMeetups = async (user) => {
    try {
        return await getMeetups({ user })
    } catch (error) {
        console.error(error)
    }
}

const searchMeetups = async (criteria) => {
    try {
        return await getMeetups(criteria)
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getUserMeetups, searchMeetups }