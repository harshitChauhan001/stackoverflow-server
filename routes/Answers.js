const express = require("express");
const { postAnswer, deleteAnswer } = require("../controllers/Answers.js");

const router = express.Router();

router.patch("/post/:id", postAnswer);
router.patch("/delete/:id", deleteAnswer);

module.exports = router;
