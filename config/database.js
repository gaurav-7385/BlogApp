const mongoose = require("mongoose");

//loading the environment file into process object
require("dotenv").config();

const connectWithdb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected SucessFully");
    })
    .catch((error) => {
      console.log("DB facing connection issues");
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithdb;
