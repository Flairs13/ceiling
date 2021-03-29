const {Schema, model} = require('mongoose')


const schema = new Schema({
    name: String,
    image: String,
    manufacturer: String,
    plinth: String,
    color: String,
    power: String,
    priceOneUnit: Number,
    index: Number,
})

module.exports = model('light', schema)
