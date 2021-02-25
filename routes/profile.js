const {Router} = require ('express')
const router = Router ()
const Profile = require ('../models/profile')
const uploadController = require("../Controllers/profileController");
const uploadImg = require('../app')



router.get ('/profile', async (req, res) => {
    try {
        await Profile.find ({}).then (profile => res.send (profile))
    } catch (e) {
        res.send ({message: 'Что то пошло не так'})
    }
})



module.exports = router


