const express = require("express");

const {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  addAnswer,
}  = require("../controllers/questionController");

const requireAuth = require('../middleware/requireAuth')





const router = express.Router();


// require auth for all question routes
router.use(requireAuth)

//askQuestion
router.post('/askQuestion', createQuestion);

// get all Question
router.get('/getQuestion', getAllQuestions);

// get single Question
router.get('/getQuestion/:id', getQuestionById);

// Answer Question

router.put('/answer/:id', addAnswer);


module.exports = router;
