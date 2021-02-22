const multer = require ('multer');
const Profile = require ('../models/profile')
const storage = multer.diskStorage ({
                                        destination: function (req, file, cb) {
                                            cb (null, './uploads');
                                        },
                                        filename: function (req, file, cb) {
                                            cb (null, file.originalname);
                                        }
                                    });



const newProfile = (req, res) => {
    Profile.findOne ({}, () => {

            const newProfile = new Profile ({
                                                name: req.body.name,
                                                // material: req.body.material,
                                                image: req.file.path,
                                            })


            newProfile.save ((err, data) => {
                if (err) return res.json ({Error: err});
                console.log(data)
                return res.json(data);
            })



    })
};

const uploadImg = multer ({storage: storage})
    .single ('image');

module.exports = {
    newProfile,
    uploadImg
}
