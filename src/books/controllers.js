// importing Book from the model file
const Book = require("./model");

// Add one book to the database
const addBook = async (request, response) => {
    try {        
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

const logTypeOfResult = async (result) => {
    console.log(`Typeof result: ${typeof result} - result: ${result}`);
  };

// Get all books from the database
app.get("/books/getAllBooks", async (request, response) => {
    try {
    // Send a request to the database with a response back
    const books = await Book.find({}); 
    await logTypeOfResult(books);
    response.send({message: "Success for getting every book", books:books});     
    } catch (error) {
        response.send({ message: "error", error:error});
    }
});

// Delete a book from the database
app.delete("/books", async(request, response) => {
    try {
    const book = await Book.deleteOne ({ title: request.body.title});
    response.send({ message: "Deleted", book: book });
    } catch (error) {
        response.send({ message: "error", error:error});
    }
});

module.exports = {
    // key: function name
    addBook: addBook,
};