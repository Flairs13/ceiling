const {Router} = require('express')
const router = Router()
const uploadImg = require('../Controllers/multer')
const uploadController = require('../Controllers/profileKraabController')



router.get('/profile-kraab', uploadController.getProfileKraab)
router.post('/profile-kraab',uploadImg.uploadImg, uploadController.newProfileKraab)
router.put('/profile-kraab',uploadImg.uploadImg, uploadController.profileKraabUpdate)
router.put('/update/profile-kraab',uploadController.profileKraabUpdatePosition)
router.delete('/profile-kraab/:id', uploadController.profileKraabDelete)

module.exports = router
