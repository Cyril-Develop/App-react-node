const database = require('../db/mysql.js');
const sharp = require('sharp');
const fs = require('fs');

exports.getAllImages = (req, res) => {
    database.query('SELECT * FROM images', (error, result) => {
        if (error) return res.status(500).json(error);
        if (result === 0) return res.status(404).json([]);
        res.status(200).json(result) 
    })
};

exports.getImagesPortrait = (req, res) => {
    database.query('SELECT * FROM images WHERE categorie = ?', 'portrait', (error, result) => {
        if (error) return res.status(500).json(error);
        if (result === 0) return res.status(404).json([]);
        res.status(200).json(result)
    })
};

exports.getImagesPaysage = (req, res) => {
    database.query('SELECT * FROM images WHERE categorie = ?', 'paysage', (error, result) => {
        if (error) return res.status(500).json(error);
        if (result === 0) return res.status(404).json([]);
        res.status(200).json(result)
    })
};

exports.getImagesAutre = (req, res) => {
    database.query('SELECT * FROM images WHERE categorie = ?', 'autre', (error, result) => {
        if (error) return res.status(500).json(error);
        if (result === 0) return res.status(404).json([]);
        res.status(200).json(result)
    })
};

exports.createImage = (req, res) => {
    const filename = req.file.originalname.split('.')[0] + Date.now() + '.jpg';
    try{
        fs.access('../client/public/imgUpload', (err) => {
            if (err) {
                console.log('Le dossier n\'existe pas');
                fs.mkdirSync('../client/public/imgUpload');
            }
        });
        sharp(req.file.buffer)
        .resize({width: 400})
        .toFormat('jpeg')
        .jpeg({quality: 90})
        .toFile(`../client/public/imgUpload/${filename}`)
    } catch (error) {
        res.status(400).json({error});
    }
    const image = {
        categorie : req.body.categorie,
        imageUrl : `http://localhost:3000/imgUpload/${filename}`
    }
        database.query('INSERT INTO images SET ?', image, (error, result) => {
            if (error) return res.status(500).json(error)
            res.status(201).json({message: 'Image ajoutée !'})
        }
    )
};
