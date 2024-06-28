const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const AdminSchema = new mongoose.Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Admin', AdminSchema)