const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next()
    } else {
        res.redirect('/')
    }
}

router.get('/home', isAuth, homeController.renderHomePage)

router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

module.exports = router