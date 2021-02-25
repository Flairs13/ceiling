const config = require('config')
const Profile = require ('../models/profile')
const path = require('path')




module.exports.newProfile = (req, res) => {
    Profile.findOne ({}, () => {
        const host = req.host;
        const filePath = req.protocol + "://" + host + ':' +  config.get('port')  +  '/' + req.file.path;


            const newProfile = new Profile ({
                                                name: req.body.name,
                                                // material: req.body.material,
                                                image: filePath
                                            })

            newProfile.save ((err, data) => {
                if (err) return res.json ({Error: err});
                console.log(data)
                return res.json(data);
            })
    })
};



