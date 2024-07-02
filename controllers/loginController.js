const Admin = require('../models/adminModel')
const bcrypt = require('bcrypt')

exports.renderLoginPage = (req, res) => {
    res.render('login')
}

exports.verifyUserAfterLogin = async (req, res) => {
    // req.session.isTrue
    run().catch(e => console.error(e))
    async function run() {
        try {
            const { username, password } = req.body
            const admin = await Admin.findOne({ username: username })
            if (!admin) {
                console.log('Credentials are not valid');
                res.render('login')
                return
            }
            const passwordMatches = bcrypt.compare(password, admin.password)
            passwordMatches.then((data) => {
                if (!data) {
                    res.render('login')
                    console.log('Credentials are not valid');
                } else {
                    req.session.isAuth = true
                    res.redirect('/home')
                }
            })
        } catch (e) {
            console.error(e)
        }
    }
}