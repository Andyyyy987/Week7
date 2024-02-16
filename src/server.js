// load dotenv for files to use
require("dotenv").config();
// making express node module and mongoose database available
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");
const bookRouter = require("./books/routes");

// making express node module data available e.g. app.listen
const app = express();

app.use(express.json());

// connect to MongoDB
connection();

app.use(bookRouter);

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});