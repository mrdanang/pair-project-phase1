const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes/index')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(session({
    secret: 'pair-project',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))
app.use(express.urlencoded({extended : true}))
app.use(router)


app.listen(PORT, () => {
    console.log(`Currently listening to PORT: `, PORT)
})