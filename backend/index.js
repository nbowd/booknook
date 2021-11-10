// Start with 'npm run dev'
const express = require('express')
require('express-async-errors');
const axios = require('axios')
const cors = require('cors')
const cheerio = require('cheerio')

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', async (request, response) => {
    let subject = request.subject
    let res = await axios.get('http://www.openlibrary.org/subjects/fantasy.json?limit=1')
    let data = await res.data;
    response.send(data)

})

app.get('/api/books/', async (request, response) => {
    let subject = request.query.subject
    let amount = request.query.amount

    let maxRange = amount - 6
    const result = Math.floor(Math.random() * (maxRange))

    let res = await axios.get(`http://www.openlibrary.org/subjects/${subject}.json?limit=5&offset=${result}`)
    let data = await res.data;
    
    const bookInfo = data.works.map(work => ({key: work.key, title: work.title, author: work.authors[0]? work.authors[0].name:'Unknown'}))
    
    // Teammates Service
    // Example:
    // http://cs361.calel.org/?title='American Gods'&author='Neil Gaiman'
    for (let book of bookInfo) {
        let rawRequest = await axios.get(`http://cs361.calel.org/?title="${book.title}"&author="${book.author !== 'Unknown'? book.author: ''}"`)
        let loadRequest = cheerio.load(rawRequest.data)
        let trimRequest = loadRequest('p').text()

        let parsed = JSON.parse(trimRequest)
        console.log(parsed);

        book.cover = parsed.cover
        book.vendor = parsed.vendor
    }
 
    response.json(bookInfo)
})

app.get('/api/book/', async (request, response) => {
    let id = request.query.id

    let res = await axios.get(`http://www.openlibrary.org${id}`)
    let data = await res.data;

    response.json(data)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})