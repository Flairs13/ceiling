const mongoose = require ('mongoose');
const ItemSchema = mongoose.Schema;


const Item = new ItemSchema ({
                                 img: {
                                     data: Buffer,
                                     contentType: String
                                 }
                             }
);

module.exports = mongoose.model ('Clothes', Item)
