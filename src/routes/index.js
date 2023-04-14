const express = require('express');
const router = express.Router();
const admin = require('./admin');
const Item = require('./item');

router.use('/', admin);
router.use('/', Item);

module.exports = router;