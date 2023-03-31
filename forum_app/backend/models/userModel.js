const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firsName: {
    type: String,
    required: true,
    
  },
  lastName: {
    type: String,
    required: true,
  
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
})

// static signup method
userSchema.statics.signup = async function(email,firsName,lastName,userName, password) {

  // validation
  if (!email ||!firsName || !lastName || !userName, !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const emailExists = await this.findOne({ email })
  
  const userNameExists = await this.findOne({ userName })

  if (emailExists) {
    throw Error('Email already in use')
  }

  if(userNameExists){
    throw Error('userName Taken')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email,firsName,lastName,userName, password: hash })

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)