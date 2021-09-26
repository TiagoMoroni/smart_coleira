const express = require('express')
var router = express.Router()

const UserController = require('./controllers/UserController')
const AnimalController = require('./controllers/AnimalController')
const CollarController = require('./controllers/CollarController')

const Auth = require("./utils/auth")

router.get('/users', UserController.index)
router.post('/users', UserController.store)
router.put('/users', UserController.update)
router.delete('/users/:userId', UserController.delete)

router.get('/animals', AnimalController.index)
router.post('/animals', AnimalController.store)
router.put('/animals', AnimalController.update)
router.delete('/animals/:animalId', AnimalController.delete)

router.get('/collars', CollarController.index)
router.post('/collars', CollarController.store)
router.put('/collars', CollarController.update)
router.delete('/collars/:collarId', CollarController.delete)

router.post('/auth', Auth.auth)

module.exports = router