const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

dotenv.config()

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

const connectDB = require('./db/dbConnect')

//routes
const usersRoute = require('./routes/users')

app.use(express.json())
app.use(cors(corsOptions))
app.use('/api/users', usersRoute)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(process.env.PORT || 8000, () => {
      console.log('Server is running on : ' + process.env.PORT)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
