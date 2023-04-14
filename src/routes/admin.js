const express = require('express');
const router = express.Router();
const Registration = require('../controllers/authentication/registration')

router.post('/register', Registration.registerAdmin)

module.exports = router