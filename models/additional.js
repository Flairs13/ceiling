const {Schema, model} = require('mongoose')


const schema = new Schema({
    name: String,
    image: String,
    type: String,
    manufacturer: String,
    color: String,
    size: String,
    priceOneUnit: Number,
    priceOneMetre: Number,
    priceOnePack: Number,
    index: Number

})

module.exports = model('additional', schema)
