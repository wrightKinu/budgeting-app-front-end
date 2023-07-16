const express = require("express");
const budget = express.Router();
const budgetList = require("../models/transactions.js");


// INDEX
budget.get("/", (req, res) => {
  res.json(budgetList);
});

// SHOW
budget.get("/:listIndex", (req, res) => {
  if (budgetList[req.params.listIndex]) {
    res.json(budgetList[req.params.listIndex]);
  } else {
    res.redirect("/error")
  }
});


// CREATE
budget.post("/", (req, res) => {
  budgetList.push(req.body);
  res.json(budgetList[budgetList.length - 1]);
});

// DELETE
budget.delete("/:listIndex", (req, res) => {
    if (budgetList[req.params.listIndex]) {
      const deletedlog = budgetList.splice(req.params.listIndex, 1);
      res.status(200).json(deletedlog);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

  // UPDATE
budget.put("/:listIndex", (req, res) => {
  if (budgetList[req.params.listIndex]) {
    budgetList[req.params.listIndex] = req.body;
    res.status(200).json(budgetList[req.params.listIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = budget;