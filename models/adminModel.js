const mongoose = require('mongoose')

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