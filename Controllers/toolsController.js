const config = require ('config')
const Tools = require ('../models/tools')


module.exports.getTools = (req, res) => {
    Tools.find ({})
        .then (profile => res.send (profile))
        .catch (error => res.send (error))
}


module.exports.newTools = (req, res) => {
    Tools.findOne ({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get ('port') + '/' + req.file.path;


        const newTools = new Tools ({
                                        name: req.body.name,
                                        type: req.body.type,
                                        manufacturer: req.body.manufacturer,
                                        size: req.body.size,
                                        priceOneUnit: req.body.priceOneUnit,
                                        image: filePath,
                                    })


        newTools.save ((err, data) => {
            if (err) return res.json ({Error: err});
            console.log (data)
            return res.json (data);
        })
    })
};

module.exports.toolsUpdate = (req, res) => {

    const updates = {
        name: req.body.name,
        type: req.body.type,
        manufacturer: req.body.manufacturer,
        size: req.body.size,
        priceOneUnit: req.body.priceOneUnit,
    };

    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get ('port') + '/' + req.file.path;
        updates.image = filePath;
    }

    Tools.findByIdAndUpdate (req.body._id, {$set: updates})
        .then (post => {
            res.send (post)
        })
        .catch (err => {
            res.send (err)
        });

};

module.exports.toolsDelete = (req, res) => {
    const _id = req.params.id.slice (1)
    console.log (JSON.stringify (_id))
    Tools.findByIdAndRemove (_id, {}, function (err, docs) {
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


