//DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const cors = require("cors");

//MIDDLEWARE
app.use(express.json());
app.use(cors());

const transactionsController = require("./controllers/transactionsController.js");
app.use("/transactions", transactionsController);


//ROUTES
app.get("/", (req, res) => {
  res.send("Lets Get To Budgeting");
});


// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});


module.exports = app