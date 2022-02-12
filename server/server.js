const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv')

dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT
const keywords = process.env.KEYWORDS

console.log(port)
console.log(keywords)

app.listen(5000, () => console.log(`Server running on port: ${port}`))
