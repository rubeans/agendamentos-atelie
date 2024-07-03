const mongoose = require('mongoose')

const ScheduleSchema = mongoose.Schema(
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

module.exports = mongoose.Model('Schedule', ScheduleSchema)