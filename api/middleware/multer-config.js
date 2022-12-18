const multer = require('multer');
const stockage = multer.memoryStorage();
const upload = multer({ stockage });
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
    upload.single('image') ( req, res, next => {
        console.log('file', req.file);
        console.log('body', req.body);
        // si le dossier n'existe pas on renvoie une erreur et on crée le dossier
        fs.access('../api/images', (err) => {
            if (err) {
                console.log('Le dossier n\'existe pas');
                fs.mkdirSync('../api/images');
            }
        });
        sharp(req.file.buffer).resize({
            width: 100,
            height: 100,
        })
        //Précise dans quel dossier on veut enregistrer l'image
        .toFile('../api/images/' + req.file.originalname);
        //res.send('ok');
    });
}

