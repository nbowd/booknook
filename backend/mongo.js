const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://bk-fullstack:${password}@booknook.fr1ra.mongodb.net/Booknook?retryWrites=true&w=majority`

mongoose.connect(url)

const bookSchema = new mongoose.Schema({
    title:String,
    author: String,
    cover: String,
    description: String,
    link: String,
    date: Date,
})

const Book = mongoose.model('Book', bookSchema)

// const book = new Book({
//     title: 'cool book',
//     author: 'awesome dude',
//     cover: 'there',
//     description: 'here',
//     link: 'somewhere',
//     date: new Date()
// })

book.save().then(result => {
  console.log('book saved!')
  mongoose.connection.close()
})