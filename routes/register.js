const router = require('express').Router()
const Controller = require('../controllers/Register-Controllers')

router.get('/', Controller.registpage)

router.post('/', Controller.postRegister)


module.exports = router