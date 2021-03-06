const Accessories = require('../models/accessories')


module.exports.getAccessories = (req, res) => {
    Accessories.find({})
        .then(profile => res.send(profile))
        .catch(error => res.send(error))
}


module.exports.newAccessories = (req, res) => {
    Accessories.findOne({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;


        const newAccessories = new Accessories({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            priceOneUnit: req.body.priceOneUnit,
            size: req.body.size,
            index: req.body.index,
            image: filePath,
        })

        newAccessories.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};

module.exports.accessoriesUpdate = (req, res) => {

    const updates = {};

    for (const bodyKey in req.body) {
        updates[bodyKey] = req.body[bodyKey]
    }

    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;
        updates.image = filePath;
    }

    Accessories.findByIdAndUpdate(req.body._id, {$set: updates})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        });

};

module.exports.accessoriesUpdatePosition = (req, res) => {
    for (const bodyElement of req.body) {
        Accessories.findByIdAndUpdate(bodyElement._id, {$set: {index: bodyElement.index}}, () => {
        })
    }
    res.send('success')
};

module.exports.accessoriesDelete = (req, res) => {
    const _id = req.params.id.slice(1)
    console.log(JSON.stringify(_id))
    Accessories.findByIdAndRemove(_id, {}, function (err, docs) {
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


