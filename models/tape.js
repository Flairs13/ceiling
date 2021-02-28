const {Schema, model} = require ('mongoose')


const schema = new Schema ({
                               name: String,
                               image: String,
                               type: String,
                               priceOneUnit: Number,
                               priceOneMetre: Number,
                               technology: String,
                           })

module.exports = model('tape', schema)
