const router = require('express').Router()
const Controller = require('../controllers/Logout-Controllers')

//ini untuk masuk ke content jika sudah login
router.get('/', (req, res) => {
    res.render('homepage.ejs')
})

router.get('/logout', Controller.logout)



module.exports = router

