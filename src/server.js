// load dotenv for files to use
require("dotenv").config();
// making express node module available
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");

const bookRouter = require("./books/routes");

// making express node module data available e.g. app.listen
const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

const logTypeOfResult = async (result) => {
  console.log(`Typeof result: ${typeof result} - result: ${result}`);
};

// Get all books from the database
app.get("/books/getAllBooks", async (request, response) => {
  // Send a request to the database with a response back
  const books = await Book.find({}); 
  await logTypeOfResult(books);
  response.send({message: "Success for getting every book", books:books}); 
});

// https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
//              Or !!!!!!!!!!!!!!!!!!!!!
// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
app.put("/books", (request, reponse) => {
  // update a single book's author by title
});

// Delete a book from the database
app.delete("/books", async(request, response) => {
  const book = await Book.deleteOne ({ title: request.body.title});
  response.send({ message: "Deleted", book: book });
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});