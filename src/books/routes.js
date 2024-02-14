// Get Router from express
const {Router} = require("express");
const bookRouter = Router();

const Book = require("./model");

const { addBook } = require("./controllers");

// Add a book to the database
bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getallbooks");

module.exports = bookRouter;