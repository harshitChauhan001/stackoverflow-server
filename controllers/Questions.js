import Questions from "../models/Questions.js";
import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const postQuestion = await new Questions(postQuestionData);
  console.log(postQuestionData);
  try {
    const data = await postQuestion.save();
    return res.status(200).json("Posted  a question successfully");
  } catch (error) {
    console.log(error);
    return res.status(409).json("Couldn't post a new question");
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Questions.find();
    return res.status(200).json(questionList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  //parameter available in the url
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }
  try {
    //   questiontodelete.userid == id
    await Questions.findByIdAndRemove(_id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// every mongoose id will be string
// every string will not mongoose id

// asdfljadf
// Object("adflkjadflkjaf")
