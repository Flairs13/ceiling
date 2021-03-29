const {Schema, model} = require('mongoose')


const schema = new Schema({
    name: String,
    image: String,
    type: String,
    priceOneMetre: Number,
    index: Number
})

module.exports = model('constructions', schema)
