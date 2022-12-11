const express = require('express');
const router = express.Router();

const image = require('../controllers/image.js');

router.get('/images', image.getAllImages);
router.post('/image', image.createImage);

module.exports = router;
