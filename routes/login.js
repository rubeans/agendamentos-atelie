const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        res.redirect('/home')
    } else {
        next()
    }
}

router.get('/', isAuth, loginController.renderLoginPage)

router.post('/', loginController.verifyUserAfterLogin)

module.exports = router