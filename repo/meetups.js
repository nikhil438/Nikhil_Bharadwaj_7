const { getModel } = require('../mongodb')
const { MEETUPS } = require('../constants')

const getMeetups = (criteria) => new Promise(async (resolve, reject) => {
    const meetups = await getModel(MEETUPS)
    meetups.find(criteria, (err, docs) => {
        if (err) {
            reject(err)
            return
        }
        resolve(docs)
    })
})

const saveMockData = async (data) => {
    const meetups = await getModel(MEETUPS)
    return meetups.create(data)
}

module.exports = { getMeetups, saveMockData }