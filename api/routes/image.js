const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/image.js');

router.get('/images', ctrl.getAllImages);
router.get('/images/portrait', ctrl.getImagesPortrait);
router.get('/images/paysage', ctrl.getImagesPaysage);
router.get('/images/autre', ctrl.getImagesAutre);
router.post('/image', ctrl.createImage);

module.exports = router;
