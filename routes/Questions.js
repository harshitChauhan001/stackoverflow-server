const express = require("express");

const {
  AskQuestion,
  getAllQuestions,
  deleteQuestion,
} = require("../controllers/Questions.js");

const app = express();

app.post("/Ask", AskQuestion);
app.get("/get", getAllQuestions);
app.delete("/delete/:id", deleteQuestion);

module.exports = app;
