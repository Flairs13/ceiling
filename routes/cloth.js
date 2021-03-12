const {Router} = require('express')
const router = Router()
const uploadController = require('../Controllers/clothController')



router.get('/cloth', uploadController.getCloth)
router.post('/cloth', uploadController.newCloth)
router.put('/cloth', uploadController.clothUpdate)


module.exports = router
