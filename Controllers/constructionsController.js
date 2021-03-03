const config = require ('config')
const Constructions = require ('../models/constructions')


module.exports.getConstructions = (req, res) => {
    Constructions.find ({})
        .then (profile => res.send (profile))
        .catch (error => res.send (error))
}


module.exports.newConstructions = (req, res) => {
    Constructions.findOne ({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get ('port') + '/' + req.file.path;


        const newConstructions = new Constructions ({
                                                name: req.body.name,
                                                type: req.body.type,
                                                priceOneMetre: req.body.priceOneMetre,
                                                image: filePath,
                                            })

        newConstructions.save ((err, data) => {
            if (err) return res.json ({Error: err});
            console.log (data)
            return res.json (data);
        })
    })
};

module.exports.constructionsUpdate = (req, res) => {

    const updates = {
        name: req.body.name,
        type: req.body.type,
        priceOneMetre: req.body.priceOneMetre,
    };

    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get ('port') + '/' + req.file.path;
        updates.image = filePath;
    }

    Constructions.findByIdAndUpdate (req.body._id, {$set: updates})
        .then (post => {
            res.send (post)
        })
        .catch (err => {
            res.send (err)
        });

};

module.exports.constructionsDelete = (req, res) => {
    const _id = req.params.id.slice (1)
    console.log (JSON.stringify (_id))
    Constructions.findByIdAndRemove (_id, {}, function (err, docs) {
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


