const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/lightController')



router.get('/light', uploadController.getLight)
router.post('/light',uploadImg.uploadImg, uploadController.newLight)
router.put('/light',uploadImg.uploadImg, uploadController.lightUpdate)
router.put('/update/light',uploadController.lightUpdatePosition)
router.delete('/light/:id', uploadController.lightDelete)

module.exports = router
