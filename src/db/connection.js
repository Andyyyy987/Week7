const mongoose = require ('mongoose');

const connection = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database");
  };

  module.exports = connection;