const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users.js");
const questionRoutes = require("./routes/Questions.js");
const answerRoute = require("./routes/Answers.js");

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  return res.send("This is Stack overflow clone API");
});

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoute);

const CONNECTION_URL =
  "mongodb+srv://admin:admin@cluster0.35kafiw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(3000, () => {
      console.log(`server is running on 3000`);
    })
  )
  .catch((err) => console.log(err.message));
