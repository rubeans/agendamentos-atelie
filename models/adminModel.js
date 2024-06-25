const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const AdminSchema = new mongoose.Schema(
    {
        name: String,
        password: String
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Admin', AdminSchema)