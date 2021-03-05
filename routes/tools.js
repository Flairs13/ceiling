const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/toolsController')



router.get('/tools', uploadController.getTools)
router.post('/tools',uploadImg.uploadImg, uploadController.newTools)
router.put('/tools',uploadImg.uploadImg, uploadController.toolsUpdate)
router.delete('/tools/:id', uploadController.toolsDelete)

module.exports = router
