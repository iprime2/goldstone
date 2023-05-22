const router = require('express').Router()

const {
  createUser,
  updateUser,
  getUsers,
} = require('../controllers/userController')

router.put('/:id', updateUser)

router.post('/', createUser)

router.get('/', getUsers)

module.exports = router
