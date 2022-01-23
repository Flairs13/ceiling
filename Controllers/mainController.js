const Profile = require('../models/profile')
const Tape = require('../models/tape')
const Accessories = require('../models/accessories')
const Light = require('../models/light')
const Constructions = require('../models/profile-flexy')
const Led = require('../models/led')
const Tools = require('../models/tools')
const Consumables = require('../models/consumables')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.getRandomItems = async (req, res) => {
    let arr = []


    await Profile.find({}).then(items => {
        const randomIndex = getRandomInt(items.length)
        let obj = items[randomIndex]
        const objRoute = {...obj._doc}
        objRoute.route = 'profile'
        arr.push(objRoute)
    })
    await Tape.find({}).then(items => {
        const randomIndex = getRandomInt(items.length)
        let obj = items[randomIndex]
        const objRoute = {...obj._doc}
        objRoute.route = 'tape'
        arr.push(objRoute)
    })
    await Accessories.find({}).then(items => {
        const randomIndex = getRandomInt(items.length)
        let obj = items[randomIndex]
        const objRoute = {...obj._doc}
        objRoute.route = 'accessories'
        arr.push(objRoute)
    })
    await Light.find({}).then(items => {
        const randomIndex = getRandomInt(items.length)
        let obj = items[randomIndex]
        const objRoute = {...obj._doc}
        objRoute.route = 'light'
        arr.push(objRoute)
    })
    await Constructions.find({}).then(items => {
        const randomIndex = getRandomInt(items.length)
        let obj = items[randomIndex]
        const objRoute = {...obj._doc}
        objRoute.route = 'constructions'
        arr.push(objRoute)
    })
    await Led.find({}).then(items => {
        const randomIndex = getRandomInt(items.length)
        let obj = items[randomIndex]
        const objRoute = {...obj._doc}
        objRoute.route = 'led'
        arr.push(objRoute)
    })
    await Tools.find({}).then(items => {
        const randomIndex = getRandomInt(items.length)
        let obj = items[randomIndex]
        const objRoute = {...obj._doc}
        objRoute.route = 'tools'
        arr.push(objRoute)
    })
    await Consumables.find({}).then(items => {
        const randomIndex = getRandomInt(items.length)
        let obj = items[randomIndex]
        const objRoute = {...obj._doc}
        objRoute.route = 'consumables'
        arr.push(objRoute)
    }).catch(error => res.send(error))

    res.send(arr)




}
