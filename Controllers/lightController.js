const config = require('config')
const Light = require('../models/light')


module.exports.getLight = (req, res) => {
    Light.find({})
        .then(profile => res.send(profile))
        .catch(error => res.send(error))
}


module.exports.newLight = (req, res) => {
    Light.findOne({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get('port') + '/' + req.file.path;


        const newLight = new Light({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            priceOneUnit: req.body.priceOneUnit,
            plinth: req.body.plinth,
            color: req.body.color,
            power: req.body.power,
            index: req.body.index,
            image: filePath,
        })


        newLight.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};

module.exports.lightUpdate = (req, res) => {

    const updates = {};

    for (const bodyKey in req.body) {
        updates[bodyKey] = req.body[bodyKey]
    }

    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get('port') + '/' + req.file.path;
        updates.image = filePath;
    }

    Light.findByIdAndUpdate(req.body._id, {$set: updates})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        });

};

module.exports.lightUpdatePosition = (req, res) => {
    for (const bodyElement of req.body) {
        Light.findByIdAndUpdate(bodyElement._id, {$set: {index: bodyElement.index}}, () => {
        })
    }
    res.send('success')
};

module.exports.lightDelete = (req, res) => {
    const _id = req.params.id.slice(1)
    console.log(JSON.stringify(_id))
    Light.findByIdAndRemove(_id, {}, function (err, docs) {
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


