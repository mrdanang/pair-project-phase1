class Controller {
    static logout(req, res){
        req.session.destroy((err) =>{
            if(err){
                res.send(err)
            } else {
                res.redirect('/')
            }
        })
    }
}

module.exports = Controller