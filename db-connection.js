require('dotenv').config()
const mongoose = require('mongoose')

async function run() {
    try {
        console.log("Connecting to Database...")
        await mongoose.connect(process.env.DB_URI)
        console.log("Successfully connected to Database!")
    } catch (error) {
        console.error("Failed to connect Database: " + error)
    }
}

module.exports = run