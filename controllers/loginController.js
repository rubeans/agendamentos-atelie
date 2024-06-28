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
            const passwordMatches = await bcrypt.compare(password, admin.password)
            if (admin.username == process.env.admin && passwordMatches) {
                return res.redirect('/home')
            } else {
                console.log('User or password is not correct!')
                return res.redirect('/')
            }
        } catch (e) {
            console.error(e)
        }
    }
}