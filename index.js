import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoute from "./routes/Answers.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));


app.use(cors());



app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoute);


app.get("/", (req, res) => {
    res.send("This is Stack overflow clone API");
});
  
const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
  "mongodb+srv://admin:admin@cluster0.35kafiw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
