const {Router} = require ('express')
const router = Router ()
const Profile = require ('../models/profile')
const uploadController = require("../Controllers/profileController");
const uploadImg = require('../Controllers/multer')



router.get ('/profile', async (req, res) => {
    try {
        await Profile.find ({}).then (profile => res.send (profile))
    } catch (e) {
        res.send ({message: 'Что то пошло не так'})
    }
})

router.post('/profile',uploadImg.uploadImg, uploadController.newProfile)
router.put('/profile',uploadImg.uploadImg, uploadController.profileUpdate)
router.delete('/profile/:id', uploadController.profileDelete)


module.exports = router


