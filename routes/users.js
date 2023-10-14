const express = require("express");

const login = require("../controllers/auth.js").login;
const signup = require("../controllers/auth.js").signup;
const getAllUsers = require("../controllers/users.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
module.exports = router;
