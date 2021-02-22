const {Schema, model} = require ('mongoose')


const schema = new Schema ({
                               name: String,
                               image: String,
                               material: String,
                               type: String,
                               size: String,
                               priceOneUnit: Number,
                               priceMetre: Number,
                               technology: String,
                               perf: String,
                               weight: String,
                           })

module.exports = model('profile', schema)
