const {Schema, model} = require ('mongoose')


const schema = new Schema ({
                               name: String,
                               image: String,
                               manufacturer: String,
                               size: String,
                               thickness: String,
                               priceOneUnit: Number,
                               priceOneMetre: Number,
                               priceOnePack: Number,
                           })

module.exports = model ('consumables', schema)
