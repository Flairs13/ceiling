const config = require ('config')
const Tape = require ('../models/tape')


module.exports.getTape = (req,res) => {
    Tape.find ({}).then (profile => res.send (profile)).catch(error => res.send(error))
}



module.exports.newTape = (req, res) => {
    Tape.findOne ({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get ('port') + '/' + req.file.path;


        const newProfile = new Tape ({
                                            name: req.body.name,
                                            type: req.body.type,
                                            priceOneMetre: req.body.priceOneMetre,
                                            technology: req.body.technology,
                                            image: filePath,
                                        })

        newProfile.save ((err, data) => {
            if (err) return res.json ({Error: err});
            console.log (data)
            return res.json (data);
        })
    })
};

module.exports.tapeUpdate = (req, res) => {

    const updates = {
        name: req.body.name,
        type: req.body.type,
        priceOneMetre: req.body.priceOneMetre,
        technology: req.body.technology,
    };

    if (req.file) {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' + config.get ('port') + '/' + req.file.path;
        updates.image = filePath;
    }

    Tape.findByIdAndUpdate(req.body._id, {$set:updates} ).then (post => {res.send(post)}).catch (err => {res.send(err)});

};

module.exports.tapeDelete = (req, res) => {
    const _id = req.params.id.slice(1)
    console.log (JSON.stringify(_id))
    Tape.findByIdAndRemove(_id, {},function (err, docs) {
        if (err) {
            console.log (err)
        }
        else {
            console.log ("Removed User : ", docs);
        }

    }).then (post => {res.send(post)}).catch (err => {res.send(err)})};


