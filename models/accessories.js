const {Schema, model} = require ('mongoose')


const schema = new Schema ({
                               name: String,
                               image: String,
                               manufacturer: String,
                               size: String,
                               priceOneUnit: Number,
                           })

module.exports = model ('accessories', schema)
