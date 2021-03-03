const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/tapeController')



router.get('/tape', uploadController.getTape)
router.post('/tape',uploadImg.uploadImg, uploadController.newTape)
router.put('/tape',uploadImg.uploadImg, uploadController.tapeUpdate)
router.delete('/tape/:id', uploadController.tapeDelete)

module.exports = router
