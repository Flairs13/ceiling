const {Router} = require ('express')
const router = Router ()
const uploadController = require("../Controllers/profileController");
const uploadImg = require('../Controllers/multer')




router.get ('/profile', uploadController.getProfile)
router.post('/profile',uploadImg.uploadImg, uploadController.newProfile)
router.put('/profile',uploadImg.uploadImg, uploadController.profileUpdate)
router.put('/update/profile',uploadController.profileUpdatePosition)
router.delete('/profile/:id', uploadController.profileDelete)


module.exports = router


