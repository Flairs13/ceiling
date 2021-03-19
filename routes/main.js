const {Router} = require('express')
const router = Router()
const uploadController = require('../Controllers/mainController')



router.get('/main', uploadController.getRandomItems)
module.exports = router