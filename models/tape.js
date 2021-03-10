const {Schema, model} = require ('mongoose')


const schema = new Schema ({
                               name: String,
                               image: String,
                               type: String,
                               priceOneMetre: Number,
                               technology: String,
                           })

module.exports = model('tape', schema)
