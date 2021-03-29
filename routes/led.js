const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/ledController')



router.get('/led', uploadController.getLed)
router.post('/led',uploadImg.uploadImg, uploadController.newLed)
router.put('/led',uploadImg.uploadImg, uploadController.ledUpdate)
router.put('/update/led',uploadController.ledUpdatePosition)
router.delete('/led/:id', uploadController.ledDelete)

module.exports = router
