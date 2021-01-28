var express = require('express')
const IndexController = require('../controllers/Index-Controller')
const router = require('express').Router()


router.get('/', (req, res) => {
res.render('homepage.ejs')
})


router.get('/listBook', IndexController.listBook )

router.get('/addBook', IndexController.addBook )
router.post("/addBook", IndexController.postAddBook)

router.get('/:id/editBook', IndexController.editBook )
router.post('/:id/editBook', IndexController.postEditBook )

router.get('/:id/deleteBook', IndexController.deleteBook )
router.post('/:id/deleteBook', IndexController.postDeleteBook )


router.get('/listBookUser', IndexController.listBookUser )
// router.get('/:id/bookUser', IndexController.bookUser )

router.get('/borrowedBook', IndexController.borrowedBook )

module.exports = router



