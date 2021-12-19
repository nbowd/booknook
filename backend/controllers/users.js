const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Book = require('../models/book')


usersRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    email: body.email,
    username: body.username,
    passwordHash,
  })
  
  try {
    const savedUser = await user.save()
    response.json(savedUser)
  } catch (error) {
    if (error.code === 11000) {
      response.status(401).json({error: 'Email already registered'})
    }
  }
  

})

usersRouter.get('/:id', async (request,response) => {
    const result = await Book.find({user: request.params.id})
    response.json(result)
})

// FOR TESTING
usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
  })

module.exports = usersRouter