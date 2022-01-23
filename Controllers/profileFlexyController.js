const ProfileFlexy = require('../models/profile-flexy')


module.exports.getProfileFlexy = (req, res) => {
    ProfileFlexy.find({})
        .then(profile => res.send(profile))
        .catch(error => res.send(error))
}


module.exports.newProfileFlexy = (req, res) => {

    ProfileFlexy.findOne({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;


        const newProfileFlexy = new ProfileFlexy({
            name: req.body.name,
            material: req.body.material,
            type: req.body.type,
            size: req.body.size,
            priceOneUnit: req.body.priceOneUnit,
            priceOneMetre: req.body.priceOneMetre,
            technology: req.body.technology,
            perf: req.body.perf,
            weight: req.body.weight,
            index: req.body.index,
            image: filePath
        })


        newProfileFlexy.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};

module.exports.profileFlexyUpdate = (req, res) => {

    const updates = {};

    for (const bodyKey in req.body) {
        updates[bodyKey] = req.body[bodyKey]
    }
    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;
        updates.image = filePath;
    }

    ProfileFlexy.findByIdAndUpdate(req.body._id, {$set: updates})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        });

};

module.exports.profileFlexyUpdatePosition = (req, res) => {
    for (const bodyElement of req.body) {
        ProfileFlexy.findByIdAndUpdate(bodyElement._id, {$set: {index: bodyElement.index}}, () => {
        })
    }
    res.send('success')
};


module.exports.profileFlexyDelete = (req, res) => {
    const _id = req.params.id.slice(1)
    console.log(JSON.stringify(_id))
    ProfileFlexy.findByIdAndRemove(_id, {}, function (err, docs) {
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


