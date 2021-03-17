const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/mailController')



router.post('/mail', uploadImg.uploadImgMail, uploadController.newMail)


module.exports = router
