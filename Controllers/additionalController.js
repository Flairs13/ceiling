const config = require('config')
const Additional = require('../models/additional')


module.exports.getAdditional = (req, res) => {
    Additional.find({})
        .then(profile => res.send(profile))
        .catch(error => res.send(error))
}


module.exports.newAdditional = (req, res) => {

    Additional.findOne({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get('port') + '/' + req.file.path;


        const newAdditional = new Additional({
            name: req.body.name,
            type: req.body.type,
            manufacturer: req.body.manufacturer,
            size: req.body.size,
            priceOneUnit: req.body.priceOneUnit,
            color: req.body.color,
            priceOneMetre: req.body.priceOneMetre,
            priceOnePack: req.body.priceOnePack,
            index: req.body.index,
            image: filePath,
        })


        newAdditional.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};

module.exports.additionalUpdate = (req, res) => {

    const updates = {};

    for (const bodyKey in req.body) {
        updates[bodyKey] = req.body[bodyKey]
    }
    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get('port') + '/' + req.file.path;
        updates.image = filePath;
    }

    Additional.findByIdAndUpdate(req.body._id, {$set: updates})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        });

};

module.exports.accessoriesUpdatePosition = (req, res) => {
    for (const bodyElement of req.body) {
        Additional.findByIdAndUpdate(bodyElement._id, {$set: {index: bodyElement.index}}, () => {
        })
    }
    res.send('success')
};


module.exports.additionalDelete = (req, res) => {
    const _id = req.params.id.slice(1)
    console.log(JSON.stringify(_id))
    Additional.findByIdAndRemove(_id, {}, function (err, docs) {
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


