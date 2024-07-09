const Service = require('./../models/serviceModel')

exports.renderHomePage = (req, res) => {
    res.render('home')
}

exports.renderNewServicePage = async (req, res) => {
    const services = await Service.find({})
    res.render('new-service', { services: services })
}