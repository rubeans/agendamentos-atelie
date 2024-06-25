const Admin = require('../models/adminModel')
const bcrypt = require('bcrypt')

exports.loginPage = (req, res) => {
    res.render('login')
}


exports.verifyUserAfterLogin = async (req, res) => {
    // req.session.isTrue
    const mongoose = require('mongoose')
    const AdminSchema = new mongoose.Schema(
        {
            name: String,
            password: String
        },
        {
            versionKey: false
        }
    )

    const Admin = mongoose.model('Admin', AdminSchema)

    run().catch(e => console.error(e))
    async function run() {
        try {
            const hashPsw = await bcrypt.hash(req.body.password, 12)
            let user = new Admin({
                name: req.body.name,
                password: hashPsw
            })
            user.save()
            console.log('admin added')
        } catch (e) {
            console.error(e)
        }
    }
}

// const { admin, password } = req.body
//     const user = await Admin.findOne({ admin })
//     if (!user) {
//         return res.redirect('/')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if (!isMatch) {
//         return res.redirect('/')
//     }

//     res.redirect('/home')