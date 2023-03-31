const { Question } = require("../models/questionModel");

// Create a new question
const createQuestion = (req, res) => {
  const { title, body } = req.body;

  console.log(title, body);

  const userId = req.user._id; // Assuming that the user ID is stored in req.user
  // const userName = req.user.userName

  const newQuestion = new Question({
    title,
    body,
    user: userId,
  });

  //    newQuestion.save((err, question) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(200).json(question);
  //     }
  //   });

  // User.findOne({_id:})

  newQuestion
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
};

// Get a list of all questions
const getAllQuestions = (req, res) => {
  Question.find({})
    .sort({ createdAt: -1 })
    .populate({ path: "user", select: ["firsName", "lastName"] })
    .then((questions) => {
      res.status(200).json(questions);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Get a single question by ID
const getQuestionById = async (req, res) => {
  const questionId = req.params.id;
  console.log(req.params);

  await Question.findById(questionId)
    .populate("user", "firsName lastName") // Include the user object with only name and email fields
    .populate("answers.user", "firsName lastName") // Include the user object for each answer with only name and email fields
    .exec()
    .then((err, question) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(question);
      }
    });
};

// Add an answer to a question
const addAnswer = (req, res) => {
  const questionId = req.params.id;
  const userId = req.user._id; // Assuming that the user ID is stored in req.user
  const { body } = req.body;

  try {
    Question.findByIdAndUpdate(
      questionId,
      {
        $push: {
          answers: {
            body,
            user: userId,
          },
        },
      },
      {
        new: true, // Return the updated document
      }
    ).then((err, question) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(question);
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  addAnswer,
};
