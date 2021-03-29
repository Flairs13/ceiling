const {Schema, model} = require('mongoose')


const schema = new Schema({
    name: String,
    image: String,
    manufacturer: String,
    power: String,
    numberLed: Number,
    color: String,
    priceOneUnit: Number,
    priceOneMetre: Number,
    index: Number,
})

module.exports = model('led', schema)
