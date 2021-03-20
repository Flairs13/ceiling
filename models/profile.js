const {Schema, model} = require('mongoose')


const schema = new Schema({
    name: String,
    image: String,
    material: String,
    type: String,
    size: String,
    priceOneUnit: Number,
    priceOneMetre: Number,
    technology: String,
    perf: String,
    weight: String,
    index: Number,
})

module.exports = model('profile', schema)
