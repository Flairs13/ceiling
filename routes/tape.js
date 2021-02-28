const {Router} = require('express')
const router = Router()
const Tape = require('../models/tape')
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/tapeController')



router.get('/tape', async (req,res) => {
    try {
        await Tape.find({}).then(profile => res.send(profile))
    } catch (e) {
        res.send({message: 'Что то пошло не так'})
    }
})
module.exports = router

router.post('/tape',uploadImg.uploadImg, uploadController.newTape)
router.put('/tape',uploadImg.uploadImg, uploadController.tapeUpdate)
router.delete('/tape/:id', uploadController.tapeDelete)
