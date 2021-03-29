const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/consumablesController')



router.get('/consumables', uploadController.getConsumables)
router.post('/consumables',uploadImg.uploadImg, uploadController.newConsumables)
router.put('/consumables',uploadImg.uploadImg, uploadController.consumablesUpdate)
router.put('/update/consumables',uploadController.consumablesUpdatePosition)
router.delete('/consumables/:id', uploadController.consumablesDelete)

module.exports = router
