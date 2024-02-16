// Get Router from express
const {Router} = require("express");

const bookRouter = Router();
const Book = require("./model");
const { addBook } = require("./controllers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getallbooks");
bookRouter.delete("/books");

module.exports = bookRouter;