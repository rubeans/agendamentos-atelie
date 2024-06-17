require('dotenv').config()
const express = require('express')
const path = require('path')
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)
const connectDB = require('./db-connection')
const app = express()

//database connection
connectDB()

// store session
const store = new MongoDBSession({
    uri: process.env.DB_URI,
    collection: 'mySessions'
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((
    session({
        secret: "key that will sign cookie",
        resave: false,
        saveUninitialized: false,
        store: store
    })
))

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/', (req, res) => {
    if (req.body.admin === process.env.admin && req.body.password === process.env.password) {
        req.session.isTrue
        res.redirect('/home')
    } else {
        res.redirect('/')
    }
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.listen('3000', () => {
    console.log('running on http://localhost:3000')
})