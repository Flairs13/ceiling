const config = require('config')
const Profile = require('../models/profile')



module.exports.getProfile = (req, res) => {
    Profile.find({}).then(profile => res.send(profile)).catch(error => res.send(error))
}


module.exports.newProfile = (req, res) => {
    console.log(req.body)
    Profile.findOne({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get('port') + '/' + req.file.path;


        const newProfile = new Profile({
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

        newProfile.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};

module.exports.profileUpdate = (req, res) => {
    console.log(req.body)

    const updates = {
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
    };
    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get('port') + '/' + req.file.path;
        updates.image = filePath;
    }

    Profile.findByIdAndUpdate(req.body._id, {$set: updates}).then(post => res.send(post)).catch(err => res.send(err));

};

module.exports.profileDelete = (req, res) => {
    const _id = req.params.id.slice(1)
    console.log(JSON.stringify(_id))
    Profile.findByIdAndRemove(_id, {}, function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.log("Removed User : ", docs);
        }

    }).then(post => {
        res.send(post)
    }).catch(err => {
        res.send(err)
    })
};


