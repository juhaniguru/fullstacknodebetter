const express = require('express')
const authController = require('../controllers/authController')


const router = express.Router();

router.post('/register', authController.registerUser)
router.post('/register2', authController.registerUser2Example)

module.exports = router