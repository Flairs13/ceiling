const {Schema, model} = require('mongoose')


const schema = new Schema({
    name: String,
    image: String,
    type: String,
    manufacturer: String,
    size: String,
    priceOneUnit: Number,
    index: Number,

})

module.exports = model('tools', schema)
