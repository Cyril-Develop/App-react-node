const express = require('express');
const router = express.Router();
const multer = require('multer');
const stockage = multer.memoryStorage();
const upload = multer({ stockage });

const ctrl = require('../controllers/image.js');
const multerConfig = require('../middleware/multer-config.js');

router.get('/images', ctrl.getAllImages);
router.get('/images/portrait', ctrl.getImagesPortrait);
router.get('/images/paysage', ctrl.getImagesPaysage);
router.get('/images/autre', ctrl.getImagesAutre);
router.post('/image', upload.single('image'), multerConfig, ctrl.createImage);

module.exports = router;
