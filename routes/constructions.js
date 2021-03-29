const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/constructionsController')



router.get('/constructions', uploadController.getConstructions)
router.post('/constructions',uploadImg.uploadImg, uploadController.newConstructions)
router.put('/constructions',uploadImg.uploadImg, uploadController.constructionsUpdate)
router.put('/update/constructions',uploadController.constructionsUpdatePosition)
router.delete('/constructions/:id', uploadController.constructionsDelete)

module.exports = router
