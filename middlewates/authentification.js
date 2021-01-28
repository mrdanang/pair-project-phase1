const authentication = (req, res, next) =>{
    if (req.session.userId){
        next()
    } else {
        res.redirect('/login?error=Need to login to access homepage')
    }
}

const loggedin = (req, res, next) => {
    if(req.session.userId){
        res.redirect('/homepage')
    } else {
        next()
    }
}


module.exports = { authentication, loggedin }