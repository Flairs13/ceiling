const Consumables = require('../models/consumables')


module.exports.getConsumables = (req, res) => {
    Consumables.find({})
        .then(profile => res.send(profile))
        .catch(error => res.send(error))
}


module.exports.newConsumables = (req, res) => {
    Consumables.findOne({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;


        const newConsumables = new Consumables({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            size: req.body.size,
            thickness: req.body.thickness,
            priceOneUnit: req.body.priceOneUnit,
            priceOneMetre: req.body.priceOneMetre,
            priceOnePack: req.body.priceOnePack,
            index: req.body.index,
            image: filePath,
        })


        newConsumables.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};

module.exports.consumablesUpdate = (req, res) => {

    const updates = {};

    for (const bodyKey in req.body) {
        updates[bodyKey] = req.body[bodyKey]
    }

    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;
        updates.image = filePath;
    }

    Consumables.findByIdAndUpdate(req.body._id, {$set: updates})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        });

};

module.exports.consumablesUpdatePosition = (req, res) => {
    for (const bodyElement of req.body) {
        Consumables.findByIdAndUpdate(bodyElement._id, {$set: {index: bodyElement.index}}, () => {
        })
    }
    res.send('success')
};


module.exports.consumablesDelete = (req, res) => {
    const _id = req.params.id.slice(1)
    console.log(JSON.stringify(_id))
    Consumables.findByIdAndRemove(_id, {}, function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.log("Removed User : ", docs);
        }

    })
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        })
};


