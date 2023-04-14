const express = require('express');
const router = express.Router()
const Item = require('../controllers/item/item');

router.post('/image', Item.uploadImage)
router.post('/item', Item.createItem);

module.exports = router