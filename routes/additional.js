const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/additionalController')



router.get('/additional', uploadController.getAdditional)
router.post('/additional',uploadImg.uploadImg, uploadController.newAdditional)
router.put('/additional',uploadImg.uploadImg, uploadController.additionalUpdate)
router.put('/update/additional',uploadController.accessoriesUpdatePosition)
router.delete('/additional/:id', uploadController.additionalDelete)

module.exports = router
