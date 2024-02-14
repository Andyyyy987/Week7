// importing Book from the model file
const Book = require("./model");

const addBook = async (request, response) => {
    try {
        // Add one book to the database
        const book = await Book.create({    
            title: request.body.title,
            author: request.body.author,
            genre: request.body.genre,
      });  
      response.send({ message: "Book created", book: book });        
    } catch (error) {
        response.send({ message: "error", error:error});       
    }
};

module.exports = {
    // key: function name
    addBook: addBook,
};