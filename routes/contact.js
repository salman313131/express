const express = require('express')
const clientController = require('../controllers/client')

const router = express.Router()

router.get('/contact',clientController.getContactUs)

module.exports = router