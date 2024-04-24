//express js ka frame work instance come from this line
const express = require("express");
//creating the server
const app = express();

//config in your environment get loaded into process object
require("dotenv").config();
//take port number from process object if didn't found then by default 3000 port is used
const PORT = process.env.PORT || 3000;

//middleware //if you want to arse json then this is used
app.use(express.json());

//imports all routes
const blog = require("./routes/blog");
//mount on blog path /api/v1 url
app.use("/api/v1", blog);

//connection with database
const connectWithdb = require("./config/database");
connectWithdb();

//start the server
app.listen(PORT, () => {
  console.log(`App is started at port no. ${PORT}`);
});

//default route to see on webpage
app.get("/", (req, res) => {
  res.send(`<h1>This is HomePage Baby</h1>`);
});
