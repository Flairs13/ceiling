const express = require('express');
const multer = require('multer');
const path = require('path')
const router = express.Router();
const Movie = require('../models/item');
const config = require('config')


const GridFsStorage = require('multer-gridfs-storage');



const storage = new GridFsStorage({
                                      url: config.get('mongoUri'),
                                      file: (req, file) => {
                                          return {
                                              filename: req.body.name + path.extname(file.originalname)
                                          };
                                      }
                                  });
const upload = multer({
                          storage
                      });



router.post('/move', upload.single('file'), (req, res) => {
    console.log(req.file)
    const movie = new Movie({
                                description: 'req.body.Description',
                                category: 'req.body.Category',
                                token: 'req.body.Description',
                                fileID: req.file.id
                            });
    console.log(movie)
    movie.save(function(err) {
        if (err) {
            console.log(err);
            return;
        }



        res.json({
                     "success": "true"
                 });
    });



});


module.exports = router;
