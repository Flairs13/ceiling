const config = require ('config')
const Accessories = require ('../models/accessories')


module.exports.getAccessories = (req, res) => {
    Accessories.find ({})
        .then (profile => res.send (profile))
        .catch (error => res.send (error))
}


module.exports.newAccessories = (req, res) => {
    Accessories.findOne ({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get ('port') + '/' + req.file.path;


        const newAccessories = new Accessories ({
                                                name: req.body.name,
                                                manufacturer: req.body.manufacturer,
                                                priceOneUnit: req.body.priceOneUnit,
                                                size: req.body.size,
                                                image: filePath,
                                            })

        newAccessories.save ((err, data) => {
            if (err) return res.json ({Error: err});
            console.log (data)
            return res.json (data);
        })
    })
};

module.exports.accessoriesUpdate = (req, res) => {

    const updates = {
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        priceOneUnit: req.body.priceOneUnit,
        size: req.body.size,
    };

    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get ('port') + '/' + req.file.path;
        updates.image = filePath;
    }

    Accessories.findByIdAndUpdate (req.body._id, {$set: updates})
        .then (post => {
            res.send (post)
        })
        .catch (err => {
            res.send (err)
        });

};

module.exports.accessoriesDelete = (req, res) => {
    const _id = req.params.id.slice (1)
    console.log (JSON.stringify (_id))
    Accessories.findByIdAndRemove (_id, {}, function (err, docs) {
        if (err) {
            console.log (err)
        }
        else {
            console.log ("Removed User : ", docs);
        }

    })
        .then (post => {
            res.send (post)
        })
        .catch (err => {
            res.send (err)
        })
};

