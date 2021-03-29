const config = require('config')
const Led = require('../models/led')


module.exports.getLed = (req, res) => {
    Led.find({})
        .then(profile => res.send(profile))
        .catch(error => res.send(error))
}


module.exports.newLed = (req, res) => {
    Led.findOne({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get('port') + '/' + req.file.path;


        const newLed = new Led({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            power: req.body.power,
            numberLed: req.body.numberLed,
            color: req.body.color,
            priceOneUnit: req.body.priceOneUnit,
            priceOneMetre: req.body.priceOneMetre,
            index: req.body.index,
            image: filePath,
        })

        newLed.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};

module.exports.ledUpdate = (req, res) => {

    const updates = {};

    for (const bodyKey in req.body) {
        updates[bodyKey] = req.body[bodyKey]
    }

    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get('port') + '/' + req.file.path;
        updates.image = filePath;
    }

    Led.findByIdAndUpdate(req.body._id, {$set: updates})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        });

};

module.exports.ledUpdatePosition = (req, res) => {
    for (const bodyElement of req.body) {
        Led.findByIdAndUpdate(bodyElement._id, {$set: {index: bodyElement.index}}, () => {
        })
    }
    res.send('success')
};

module.exports.ledDelete = (req, res) => {
    const _id = req.params.id.slice(1)
    console.log(JSON.stringify(_id))
    Led.findByIdAndRemove(_id, {}, function (err, docs) {
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


