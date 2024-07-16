const Service = require('./../models/serviceModel')

exports.renderHomePage = async (req, res) => {
    const services = await Service.find({})
    res.render('home', { services: services })
}

exports.renderNewServicePage = (req, res) => {
    res.render('new-service')
}

exports.handleNewServicePost = async (req, res) => {
    const { clientName, date, price } = req.body
    const newService = { clientName, date, price }
    await Service.create(newService)
    res.redirect('/home')
}