const database = require('../db/mysql.js');
const sharp = require('sharp');
const fs = require('fs');

module.exports = (req, res, next) => {
    if(req.file){
        const filename = req.file.originalname.split('.')[0] + Date.now() + '.jpg';
        try{
            fs.access('../client/public/imgUpload', (err) => {
                if (err) {
                    console.log('Le dossier n\'existe pas');
                    fs.mkdirSync('../client/public/imgUpload');
                }
            });
            sharp(req.file.buffer)
            .resize({width: 300, height: 300})
            .toFormat('jpeg')
            .jpeg({quality: 90})
            .toFile(`../client/public/imgUpload/${filename}`)
            .then(() => {
                database.query('INSERT INTO images SET categorie = ?, imageUrl = ?', [req.body.categorie, `http://localhost:3000/imgUpload/${filename}`], (error, result) => {
                    if (error) return res.status(500).json(error)
                    res.status(201).json({message: 'Image ajoutée !'})
                })
            })
        } catch (error) {
            res.status(400).json({error});
        }
    } else {
        next();
    }
}

