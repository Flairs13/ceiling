const {Schema, model} = require('mongoose')


const schema = new Schema({
    additional: {
        angle: {
            label: String,
            price: Number,
        },
        curv: {
            label: String,
            price: Number
        },
        cut: {
            label: String,
            price: Number
        },
        overlap: {
            label: String,
            price: Number
        },
        solder: {
            label: String,
            price: Number
        },
    },
    cloth: {
        descor: {
            label: String,
            price: Number
        },
    },
    exc: {
        finca: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        pongsM: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        pongsS_L: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        transparent: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
    },
    lac: {
        white240: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        white320: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        white500: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        color307_501_507: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        otherColor: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        color500: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
    },
    mat: {
        white240: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        white320: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        white500: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },

        color307_501_507: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        otherColor: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
        color500: {
            label: String,
            valueCut: Number,
            valueGarp: Number,
        },
    },
})

module.exports = model('cloth', schema)
