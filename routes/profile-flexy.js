const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/profileFlexyController')



router.get('/profile-flexy', uploadController.getProfileFlexy)
router.post('/profile-flexy',uploadImg.uploadImg, uploadController.newProfileFlexy)
router.put('/profile-flexy',uploadImg.uploadImg, uploadController.profileFlexyUpdate)
router.put('/update/profile-flexy',uploadController.profileFlexyUpdatePosition)
router.delete('/profile-flexy/:id', uploadController.profileFlexyDelete)

module.exports = router
