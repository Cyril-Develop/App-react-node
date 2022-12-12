const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/image.js');

router.get('/images', ctrl.getAllImages);
router.post('/image', ctrl.createImage);

module.exports = router;
