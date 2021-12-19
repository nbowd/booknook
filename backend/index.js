require('dotenv').config()
const express = require('express')
require('express-async-errors');
const axios = require('axios')
const cors = require('cors')
const cheerio = require('cheerio')
const Book = require('./models/book')
const usersRouter = require('./controllers/users')
const User = require('./models/user')
const loginRouter = require('./controllers/login')
const jwt = require('jsonwebtoken')


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

// Used to generate display cards, results based on selected subject
app.get('/api/books/', async (request, response) => {
    let subject = request.query.subject
    let amount = request.query.amount

    // Generates randomized offset for results
    let maxRange = amount - 6
    const result = Math.floor(Math.random() * (maxRange))

    let res = await axios.get(`http://www.openlibrary.org/subjects/${subject}.json?limit=10&offset=${result}`)
    let data = await res.data;

    const bookInfo = data.works.map(work => ({
        key: work.key, 
        title: work.title, 
        author: work.authors[0] ? // Handles missing or incorrectly formatted property
            work.authors[0].name
            :'Unknown',
        cover: work.cover_id ?
            `https://covers.openlibrary.org/b/id/${work.cover_id}-L.jpg`
            : null
        }))

    response.json(bookInfo)
})

// Used to build modal with additional book information
app.get('/api/book/', async (request, response) => {
    let id = request.query.id
    let title = request.query.title
    let author = request.query.author

    let findDescription = () => {
        let res = axios.get(`http://www.openlibrary.org${id}`)
        return res
    }
    let findLink = () => {
        let res = axios.get(`http://cs361.calel.org/?title="${title}"&author="${author !== 'Unknown'? author: ''}"`)
        return res
    }
    
    // Sends both promises concurrently, only proceeds when both have returned with a response
    const [detailsResponse, linkResponse] = await Promise.all([findDescription(), findLink()])
    
    // Parsing teammates service response
    let loadRequest = cheerio.load(linkResponse.data)
    let trimRequest = loadRequest('p').text()
    let parsed = JSON.parse(trimRequest)

    let bookDetails = detailsResponse.data; 
    let vendor = parsed.vendor
    let cover = parsed.cover
    if (vendor && cover) {response.json({bookDetails, vendor, cover})}
    else {response.json({bookDetails, vendor: cover})}
})

app.get('/api/saved', async (request, response) => {  
    const books = await Book.find({}).populate('user', { email: 1, username: 1 })
    response.json(books)
  })

app.get('/api/saved/:id', (request, response) => {
  Book.findById(request.params.id)
    .then(book => {
        if (book) {
        response.json(book)
        } else {
        response.status(404).end()
        }
    })
    .catch(error => {
        console.log(error)
        response.status(400).send({ error: 'Malformatted id' })
    })
})

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
}

app.post('/api/saved', async (request,response) => {
    const {title, author, cover, link, description, key} = request.body
    if (title === undefined) {
        return response.status(400).json({ error: 'Title missing' })
    }

    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'Token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)   
    
    const book = new Book({
        title: title,
        author: author,
        cover: cover,
        description: description,
        link: link,
        key: key,
        date: new Date(),
        user: user._id
    })
    try {
        const savedBook = await book.save()

        // Adds book id to users individual list
        user.books = user.books.concat(savedBook._id)
        await user.save()
        response.json(savedBook)
    } catch (error) {
        return response.status(401)
    }
})

app.delete('/api/saved/:id', (request, response, next) => {
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'Token missing or invalid' })
    }
    Book.findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
})

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'Unknown endpoint' })
  }
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})