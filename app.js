require('dotenv').config()
const express = require('express')
const path = require('path')
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)
const connectDB = require('./db-connection')
const app = express()

//database connection
connectDB()

//declare routers
const loginRouter = require('./routes/login')
const homeRouter = require('./routes/home')

//use routers
app.use('/', loginRouter)
app.use('/home', homeRouter)

// store session
const store = new MongoDBSession({
    uri: process.env.DB_URI,
    collection: 'mySessions'
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

//use static files
app.use(express.static(path.join(__dirname, 'public')));

//session storage
app.use((
    session({
        secret: "key that will sign cookie",
        resave: false,
        saveUninitialized: false,
        store: store
    })
))

app.listen('3000', () => {
    console.log('running on http://localhost:3000')
})