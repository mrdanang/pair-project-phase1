const { Book, User, BookUser  } = require("../models");

class IndexController {

    static home(req, res) {
        res.render('homepage.ejs')
    }

    
    // create

    
  static addBook(req, res) {
    res.render('./books/addBook')
   }
   static postAddBook(req, res) {
     
     let input = {
       book_name: req.body.book_name,
       author: req.body.author,
       genre: req.body.genre
              
     }
 
    
     Book.create(input)
         .then(() => {
             res.redirect('./listBook')
         })
         .catch(err => {
            res.send(err)
         })   
   }          
 
 

    // read


static listBook(req, res) {
    Book.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
        .then(data => {
            res.render('./books/listBook.ejs', { data })
        })
        .catch(err => {
            res.send(err)
        })
}


static id(req, res) {


const id = +req.params.id

Book.findAll({
  where: {
      id: id
  }
})
.then(data => {
    res.render('books/books.ejs', {data})
})
.catch(err => {
    res.send(err)
})

}




    // update

    static editBook(req, res) {
        let error = ''
        const id = req.params.id
        Book.findByPk(id)
            .then(dataBook => {
                console.log(JSON.stringify(dataBook,null,2))
                Book.findAll()
                   
                        res.render('books/editBook.ejs', { Books:dataBook, error })
                    
            })
            .catch(err => {
                res.send(err)
            })
    }
    static postEditBook(req, res) {
        const id = req.params.id
        const { book_name, author, genre} = req.body
        const dataBook = { book_name, author, genre }
        
console.log(req.body)
       
            Book.update(dataBook, {
                where: {
                    id: id
                }
            })
                .then(data => {
                    res.redirect('/listBook')
                })
                .catch(err => {
                    res.send(err)
                })
        
    }

    // - delete

    static deleteBook(req, res) {
        res.render("./books/deleteBook.ejs");
    }
    static postDeleteBook(req, res) {
      let id = req.params.id
          Book.destroy({
              where: {
              id: id
              }
          })
          .then(() => {
              res.redirect('/listBook')
          })
          .catch((err) => {
              res.send(err)
          })
      }
    


// list book for user


static listBookUser(req, res) {
    Book.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
        .then(data => {
            res.render('./books/listBookUser', { data })
        })
        .catch(err => {
            res.send(err)
        })
}


static id(req, res) {


const id = +req.params.id

Book.findAll({
  where: {
      id: id
  }
})
.then(data => {
    res.render('./books/listBookUser.ejs', {data})
})
.catch(err => {
    res.send(err)
})

}



// list book dipinjam user

static borrowedBook(req, res) {
            
let id = req.session.userId
Users.findAll({
    include : Books,
    where : {id : id}
})
.then(data => {
    res.render ('/borrowedBook', {data})

})
.catch(err => {
    res.send(err)
})
        
}
}

module.exports = IndexController

