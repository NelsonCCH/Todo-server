require('dotenv').config()
const express = require('express')

const cors = require('cors')

const connectDB = require('./config/db')

const app = express()

const todo = require('./routes/todo')

connectDB()

app.use(express.json())
app.use(cors())


app.get('/', (req, res)=> res.send("Server is up running!"))

app.use('/api/todo', todo)

app.listen(3001, () => console.log('server listening for port 3001'))