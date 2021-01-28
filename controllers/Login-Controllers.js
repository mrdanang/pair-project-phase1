const { User } = require('../models')
const bcrypt = require('bcrypt')

class Controller {
    static loginpage(req, res){
        let errorMessage = ''
        if(req.query.error){
            errorMessage = req.query.error
        }


        res.render('loginPage.ejs', {
            errorMessage
        })
    }

    static postLoginPage(req, res){
        const { username, password } = req.body
        User.findOne({
            where: {
                username
            }
        }).then(data => {
            if(data){
                const compare = bcrypt.compareSync(password, data.password)
                if (compare){
                    req.session.userId = data.id
                    res.redirect('/homepage')
                } else {
                    res.redirect('/login?error=password is wrong')
                }
            } else {
                res.redirect('/login?error=username is not found')
            }
        }).catch(err => res.send(err))
    }
}

module.exports = Controller