const {Router} = require ('express')
const router = Router ()
const Profile = require ('../models/profile')
const uploadController = require("../Controllers/profileController");


router.get ('/profile', async (req, res) => {
    try {
        await Profile.find ({})
            .then (profile => res.send (profile))
        console.log (req.file)
        // await upload(req,res)
    } catch (e) {
        res.send ({message: 'Что то пошло не так'})
    }
})

router.post ('/uploads',uploadController.uploadImg,uploadController.newProfile)

module.exports = router


