const multer = require ('multer');


const storage = multer.diskStorage ({
                                        destination: function (req, file, cb) {
                                            cb (null,  './uploads');
                                        },
                                        filename: function (req, file, cb) {
                                            cb (null, file.originalname);
                                        }
                                    });

module.exports.uploadImg = uploadImg = multer ({storage: storage, limits : {fileSize : 1000000}}).single ('image');


const storage2 = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb (null,  './imgMail');
    },
    filename: function (req, file, cb) {
        cb (null, file.originalname);
    }
});

module.exports.uploadImgMail = uploadImg = multer ({storage: storage2, limits : {fileSize : 50000000}}).array('image',20)