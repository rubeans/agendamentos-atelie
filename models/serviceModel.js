const mongoose = require('mongoose')

const ServiceSchema = mongoose.Schema(
    {
        clientName: {
            type: String
        },
        date: {
            type: Date
        },
        price: {
            type: Number
        },
        status: {
            type: Boolean
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Service', ServiceSchema)