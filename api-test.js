const { saveMockData } = require('./repo/meetups')
const { getToken } = require('./authentication')

const getMockConfig = () => {
    const startDate = new Date()
    const endDate = new Date()
    endDate.setMonth(endDate.getHours() + 2)
    return [
        {
            name: 'Hyderabad Supply chain Meetup',
            conductBy: 'Phoenex Arena',
            user: 'nikhilbharadwaj38@gmail.com',
            organizer: 'Ranga D',
            status: 'A',
            location: 'Hyderabad',
            campaignStartTime: startDate,
            campaignEndTime: endDate,
        },
        {
            name: 'Seminar on Law of Attraction- Learn to create your reality',
            conductBy: 'Sireesha',
            user: 'nikhilbharadwaj38@gmail.com',
            organizer: 'Sireesha',
            status: 'A',
            location: 'Vizag',
            campaignStartTime: startDate,
            campaignEndTime: endDate,
        },
        {
            name: 'New techniques and forms of farming',
            conductBy: 'Icrisat',
            user: 'nikhilbharadwaj38@gmail.com',
            organizer: 'Joseph',
            status: 'A',
            location: 'Hyderabad',
            campaignStartTime: startDate,
            campaignEndTime: endDate,
        },
        {
            name: 'Learn More about OpenNebula - Cloud Platform',
            conductBy: 'Phoenex Arena',
            user: 'nikhilbharadwaj38@gmail.com',
            organizer: 'Ranga D',
            status: 'A',
            location: 'Mumbai',
            campaignStartTime: startDate,
            campaignEndTime: endDate,
        }
    ]
}

const loadMockDataToConfig = () => {
    getMockConfig().forEach(async each => {
        await saveMockData(each)
        console.log(each, 'saved to db')
    })
}
// loadMockDataToConfig()
console.log(getToken({ company: 'Honeywell' }))