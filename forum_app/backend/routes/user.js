const express = require('express')

// controller functions
const { loginUser, signupUser,getUserbyId } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// get user by id

router.get('/user',getUserbyId)

module.exports = router
