const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/accessoriesController')



router.get('/accessories', uploadController.getAccessories)
router.post('/accessories',uploadImg.uploadImg, uploadController.newAccessories)
router.put('/accessories',uploadImg.uploadImg, uploadController.accessoriesUpdate)
router.delete('/accessories/:id', uploadController.accessoriesDelete)

module.exports = router
