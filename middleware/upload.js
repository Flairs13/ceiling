const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const config = require('config')

const storage = new GridFsStorage({
                                    url: config.get('mongoUri'),
                                    options: { useNewUrlParser: true, useUnifiedTopology: true },
                                    file: (req, file) => {
                                        const match = ["image/png", "image/jpeg"];

                                        if (match.indexOf(file.mimetype) === -1) {
                                            const filename = `${Date.now()}${file.originalname}`;
                                            return filename;
                                        }

                                        return {
                                            bucketName: "photos",
                                            filename: `${Date.now()}${file.originalname}`

                                        };
                                    }
                                });

const uploadFile = multer({ storage: storage }).single("file");
const uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;
