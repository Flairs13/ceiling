const Cloth = require('../models/cloth')
const getFields = (count, interface1,) => {
    const nameField = 'additionalField_'
    const obj = {}
    for(let i = 0; i < count; i++){
        obj[nameField + i] = interface1
    }
    return obj
}
const initialValue1 = {
    facture: getFields(20,{
        label: '',
        color: '',
        width: 0,
        price: 0,
    }),
    cloth: getFields(10,{
        label: '',
        color: '',
        width: 0,
        price: 0,
    }),
    additional: getFields(15,{
        label: '',
        price: 0,
    }),
}

module.exports.getCloth = (req, res) => {
    Cloth.find({})
        .then(profile => res.send(profile))
        .catch(error => res.send(error))
}


module.exports.newCloth = (req, res) => {
    const table = req.body

    Cloth.findOne({}, () => {
        // const newCloth = new Cloth({
        //     additional: {
        //         angle: {
        //             label: table.additional.angle.label,
        //             price: table.additional.angle.price,
        //         },
        //         curv: {
        //             label: table.additional.curv.label,
        //             price: table.additional.curv.price,
        //         },
        //         cut: {
        //             label: table.additional.cut.label,
        //             price: table.additional.cut.price,
        //         },
        //         overlap: {
        //             label: table.additional.overlap.label,
        //             price: table.additional.overlap.price,
        //         },
        //         solder: {
        //             label: table.additional.solder.label,
        //             price: table.additional.solder.price,
        //         },
        //     },
        //     cloth: {
        //         descor: {
        //             label: table.cloth.descor.label,
        //             price: table.cloth.descor.price,
        //         },
        //     },
        //     exc: {
        //         finca: {
        //             label: table.exc.finca.label,
        //             valueCut: table.exc.finca.valueCut,
        //             valueGarp: table.exc.finca.valueGarp,
        //         },
        //         pongsM: {
        //             label: table.exc.pongsM.label,
        //             valueCut: table.exc.pongsM.valueCut,
        //             valueGarp: table.exc.pongsM.valueGarp,
        //         },
        //         pongsS_L: {
        //             label: table.exc.pongsS_L.label,
        //             valueCut: table.exc.pongsS_L.valueCut,
        //             valueGarp: table.exc.pongsS_L.valueGarp,
        //         },
        //         transparent: {
        //             label: table.exc.transparent.label,
        //             valueCut: table.exc.transparent.valueCut,
        //             valueGarp: table.exc.transparent.valueGarp,
        //         },
        //     },
        //     lac: {
        //         white240: {
        //             label: table.lac.white240.label,
        //             valueCut: table.lac.white240.valueCut,
        //             valueGarp: table.lac.white240.valueGarp,
        //         },
        //         white320: {
        //             label: table.lac.white320.label,
        //             valueCut: table.lac.white320.valueCut,
        //             valueGarp: table.lac.white320.valueGarp,
        //         },
        //         white500: {
        //             label: table.lac.white500.label,
        //             valueCut: table.lac.white500.valueCut,
        //             valueGarp: table.lac.white500.valueGarp,
        //         },
        //         color307_501_507: {
        //             label: table.lac.color307_501_507.label,
        //             valueCut: table.lac.color307_501_507.valueCut,
        //             valueGarp: table.lac.color307_501_507.valueGarp,
        //         },
        //         otherColor: {
        //             label: table.lac.otherColor.label,
        //             valueCut: table.lac.otherColor.valueCut,
        //             valueGarp: table.lac.otherColor.valueGarp,
        //         },
        //         color500: {
        //             label:  table.lac.color500.label,
        //             valueCut:  table.lac.color500.valueCut,
        //             valueGarp:  table.lac.color500.valueGarp,
        //         },
        //         additionalField_1: {
        //             label:  table.lac.additionalField_1.label,
        //             valueCut:  table.lac.additionalField_1.valueCut,
        //             valueGarp:  table.lac.additionalField_1.valueGarp,
        //         },
        //         additionalField_2: {
        //             label:  table.lac.additionalField_2.label,
        //             valueCut:  table.lac.additionalField_2.valueCut,
        //             valueGarp:  table.lac.additionalField_2.valueGarp,
        //         },
        //
        //     },
        //     mat: {
        //         white240: {
        //             label: table.mat.white240.label,
        //             valueCut: table.mat.white240.valueCut,
        //             valueGarp: table.mat.white240.valueGarp,
        //         },
        //         white320: {
        //             label: table.mat.white320.label,
        //             valueCut: table.mat.white320.valueCut,
        //             valueGarp: table.mat.white320.valueGarp,
        //         },
        //         white500: {
        //             label: table.mat.white500.label,
        //             valueCut: table.mat.white500.valueCut,
        //             valueGarp: table.mat.white500.valueGarp,
        //         },
        //
        //         color307_501_507: {
        //             label: table.mat.color307_501_507.label,
        //             valueCut: table.mat.color307_501_507.valueCut,
        //             valueGarp: table.mat.color307_501_507.valueGarp,
        //         },
        //         otherColor: {
        //             label: table.mat.otherColor.label,
        //             valueCut: table.mat.otherColor.valueCut,
        //             valueGarp: table.mat.otherColor.valueGarp,
        //         },
        //         color500: {
        //             label:  table.mat.color500.label,
        //             valueCut:  table.mat.color500.valueCut,
        //             valueGarp:  table.mat.color500.valueGarp,
        //         },
        //         additionalField_1: {
        //             label:  table.mat.additionalField_1.label,
        //             valueCut:  table.mat.additionalField_1.valueCut,
        //             valueGarp:  table.mat.additionalField_1.valueGarp,
        //         },
        //         additionalField_2: {
        //             label:  table.mat.additionalField_2.label,
        //             valueCut:  table.mat.additionalField_2.valueCut,
        //             valueGarp:  table.mat.additionalField_2.valueGarp,
        //         },
        //
        //     },
        //
        // })

        const newCloth = new Cloth(req.body)

        newCloth.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};

module.exports.clothUpdate = (req, res) => {
    const table = req.body
    // const updates = {
    //     additional: {
    //         angle: {
    //             label: table.additional.angle.label,
    //             price: table.additional.angle.price,
    //         },
    //         curv: {
    //             label: table.additional.curv.label,
    //             price: table.additional.curv.price,
    //         },
    //         cut: {
    //             label: table.additional.cut.label,
    //             price: table.additional.cut.price,
    //         },
    //         overlap: {
    //             label: table.additional.overlap.label,
    //             price: table.additional.overlap.price,
    //         },
    //         solder: {
    //             label: table.additional.solder.label,
    //             price: table.additional.solder.price,
    //         },
    //     },
    //     cloth: {
    //         descor: {
    //             label: table.cloth.descor.label,
    //             price: table.cloth.descor.price,
    //         },
    //     },
    //     exc: {
    //         finca: {
    //             label: table.exc.finca.label,
    //             valueCut: table.exc.finca.valueCut,
    //             valueGarp: table.exc.finca.valueGarp,
    //         },
    //         pongsM: {
    //             label: table.exc.pongsM.label,
    //             valueCut: table.exc.pongsM.valueCut,
    //             valueGarp: table.exc.pongsM.valueGarp,
    //         },
    //         pongsS_L: {
    //             label: table.exc.pongsS_L.label,
    //             valueCut: table.exc.pongsS_L.valueCut,
    //             valueGarp: table.exc.pongsS_L.valueGarp,
    //         },
    //         transparent: {
    //             label: table.exc.transparent.label,
    //             valueCut: table.exc.transparent.valueCut,
    //             valueGarp: table.exc.transparent.valueGarp,
    //         },
    //     },
    //     lac: {
    //         white240: {
    //             label: table.lac.white240.label,
    //             valueCut: table.lac.white240.valueCut,
    //             valueGarp: table.lac.white240.valueGarp,
    //         },
    //         white320: {
    //             label: table.lac.white320.label,
    //             valueCut: table.lac.white320.valueCut,
    //             valueGarp: table.lac.white320.valueGarp,
    //         },
    //         white500: {
    //             label: table.lac.white500.label,
    //             valueCut: table.lac.white500.valueCut,
    //             valueGarp: table.lac.white500.valueGarp,
    //         },
    //         color307_501_507: {
    //             label: table.lac.color307_501_507.label,
    //             valueCut: table.lac.color307_501_507.valueCut,
    //             valueGarp: table.lac.color307_501_507.valueGarp,
    //         },
    //         otherColor: {
    //             label: table.lac.otherColor.label,
    //             valueCut: table.lac.otherColor.valueCut,
    //             valueGarp: table.lac.otherColor.valueGarp,
    //         },
    //         color500: {
    //             label:  table.lac.color500.label,
    //             valueCut:  table.lac.color500.valueCut,
    //             valueGarp:  table.lac.color500.valueGarp,
    //         },
    //         additionalField_1: {
    //             label:  table.lac.additionalField_1.label,
    //             valueCut:  table.lac.additionalField_1.valueCut,
    //             valueGarp:  table.lac.additionalField_1.valueGarp,
    //         },
    //         additionalField_2: {
    //             label:  table.lac.additionalField_2.label,
    //             valueCut:  table.lac.additionalField_2.valueCut,
    //             valueGarp:  table.lac.additionalField_2.valueGarp,
    //         },
    //     },
    //     mat: {
    //         white240: {
    //             label: table.mat.white240.label,
    //             valueCut: table.mat.white240.valueCut,
    //             valueGarp: table.mat.white240.valueGarp,
    //         },
    //         white320: {
    //             label: table.mat.white320.label,
    //             valueCut: table.mat.white320.valueCut,
    //             valueGarp: table.mat.white320.valueGarp,
    //         },
    //         white500: {
    //             label: table.mat.white500.label,
    //             valueCut: table.mat.white500.valueCut,
    //             valueGarp: table.mat.white500.valueGarp,
    //         },
    //
    //         color307_501_507: {
    //             label: table.mat.color307_501_507.label,
    //             valueCut: table.mat.color307_501_507.valueCut,
    //             valueGarp: table.mat.color307_501_507.valueGarp,
    //         },
    //         otherColor: {
    //             label: table.mat.otherColor.label,
    //             valueCut: table.mat.otherColor.valueCut,
    //             valueGarp: table.mat.otherColor.valueGarp,
    //         },
    //         color500: {
    //             label:  table.mat.color500.label,
    //             valueCut:  table.mat.color500.valueCut,
    //             valueGarp:  table.mat.color500.valueGarp,
    //         },
    //         additionalField_1: {
    //             label:  table.mat.additionalField_1.label,
    //             valueCut:  table.mat.additionalField_1.valueCut,
    //             valueGarp:  table.mat.additionalField_1.valueGarp,
    //         },
    //         additionalField_2: {
    //             label:  table.mat.additionalField_2.label,
    //             valueCut:  table.mat.additionalField_2.valueCut,
    //             valueGarp:  table.mat.additionalField_2.valueGarp,
    //         },
    //     },
    // };


    Cloth.findByIdAndUpdate(req.body._id, {$set: table})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        });

};

