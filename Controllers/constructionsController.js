const Constructions = require('../models/constructions')


module.exports.getConstructions = (req, res) => {
    Constructions.find({})
        .then(profile => res.send(profile))
        .catch(error => res.send(error))
}


module.exports.newConstructions = (req, res) => {
    Constructions.findOne({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;


        const newConstructions = new Constructions({
            name: req.body.name,
            type: req.body.type,
            priceOneMetre: req.body.priceOneMetre,
            index: req.body.index,
            image: filePath,
        })

        newConstructions.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};

module.exports.constructionsUpdate = (req, res) => {

    const updates = {};

    for (const bodyKey in req.body) {
        updates[bodyKey] = req.body[bodyKey]
    }

    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;
        updates.image = filePath;
    }

    Constructions.findByIdAndUpdate(req.body._id, {$set: updates})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        });

};

module.exports.constructionsUpdatePosition = (req, res) => {
    for (const bodyElement of req.body) {
        Constructions.findByIdAndUpdate(bodyElement._id, {$set: {index: bodyElement.index}}, () => {
        })
    }
    res.send('success')
};

module.exports.constructionsDelete = (req, res) => {
    const _id = req.params.id.slice(1)
    console.log(JSON.stringify(_id))
    Constructions.findByIdAndRemove(_id, {}, function (err, docs) {
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


