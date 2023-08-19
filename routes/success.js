const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const clientController = require('../controllers/client')

const router = express.Router()

router.post('/success',clientController.printSuccess)

module.exports = router