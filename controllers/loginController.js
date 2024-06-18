exports.loginPage = (req, res) => {
    res.render('login')
}

exports.verifyUserAfterLogin = (req, res) => {
    if (req.body.admin === process.env.admin && req.body.password === process.env.password) {
        req.session.isTrue
        res.redirect('/home')
    } else {
        res.redirect('/')
    }
}