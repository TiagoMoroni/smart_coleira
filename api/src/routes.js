const express = require('express')
var router = express.Router()

const userController = require('./controllers/UserController')

router.get('/users', userController.index)
router.post('/users', userController.store)
router.put('/users', userController.update)
router.delete('/users/:userId', userController.delete)

module.exports = router