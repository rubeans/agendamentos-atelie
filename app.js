require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('login', { title: "Login Page" })
})

app.post('/', (req, res) => {
    if(req.body.admin === process.env.admin && req.body.password === process.env.password){
        res.render('home', {title: "Home Page"})
    } else{
        res.redirect('/')
    }
})

app.listen('3000', () => {
    console.log('running on port 3000')
})