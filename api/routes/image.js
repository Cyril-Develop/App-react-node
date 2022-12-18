const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/image.js');
const multer = require('../middleware/multer-config.js');

router.get('/images', ctrl.getAllImages);
router.get('/images/portrait', ctrl.getImagesPortrait);
router.get('/images/paysage', ctrl.getImagesPaysage);
router.get('/images/autre', ctrl.getImagesAutre);
router.post('/image', multer, ctrl.createImage);

module.exports = router;
