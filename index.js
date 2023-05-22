const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { StatusCodes } = require('http-status-codes')

dotenv.config()

const connectDB = require('./db/dbConnect')

//routes
const usersRoute = require('./routes/users')

app.use(express.json())

app.use('/api/users', usersRoute)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(process.env.PORT || 8000, () => {
      console.log('Server is running on : ' + process.env.PORT)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
