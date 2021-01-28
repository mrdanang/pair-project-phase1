const { User } = require('../models/index')
const nodemailer = require('nodemailer')

class Controller {
    static registpage(req, res){
        res.render('registerForm.ejs')
    } 

    static postRegister(req, res){
        const user = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phone_number: req.body.phone_number,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        User.create(user)
        .then(data => {         
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'publiclibraryh8@gmail.com',
                    pass: 'Public_LibraryH8'
                }
            })
            let mailOptions = {
                from: 'apubliclibraryh8@gmail.com',
                to: data.email,
                subject: 'Thank you for registering to Public Library',
                text: 'Hi! Thanks for your intrested in our website. We are still in development so stick with us for future updates'
            }

            transporter.sendMail(mailOptions, (err, info) => {
                if(err){
                    console.log(err)
                } else {
                    console.log(`Email sent: `, info.response )
                }
            })
            res.redirect('/login')
        })
        .catch(err => console.log(err))
    }
}


module.exports = Controller