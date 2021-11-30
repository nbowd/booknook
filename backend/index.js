// Start with 'npm run dev' for auto-restart on file save
const express = require('express')
require('express-async-errors');
const axios = require('axios')
const cors = require('cors')
const cheerio = require('cheerio')

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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})