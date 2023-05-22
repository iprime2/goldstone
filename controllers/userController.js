const User = require('../model/User')
const { StatusCodes } = require('http-status-codes')

const createUser = async (req, res) => {
  const { id, name, email, gender, status } = req.body
  try {
    console.log('hello')
    const newUser = await User.create({
      id,
      name,
      email,
      gender,
      status,
    })

    // await newUser.save()
    console.log(newUser)
    // const savedUser = await newUser.save()
    res.status(StatusCodes.CREATED).json(savedUser)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error)
  }
}

const getUsers = async (req, res) => {
  try {
    console.log('hello')
    const users = await User.find()

    if (!users) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: 'Something went wrong, Please try again' })
    }

    res.status(StatusCodes.OK).json(users)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error)
  }
}

const updateUser = async (req, res) => {
  const id = req.params

  if (!id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Id unavailable',
    })
  }

  if (!req.body) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'No Data found to update user',
    })
  }

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    )

    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'User Not Found!',
      })
    }

    res.status(StatusCodes.OK).json(user)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error)
  }
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
}
