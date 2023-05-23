const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female'],
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'inactive'],
    },
  },
  { timestamp: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = { User }
