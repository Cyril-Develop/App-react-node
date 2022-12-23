const database = require('../db/mysql.js');

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
    const image = {
        categorie : req.body.categorie,
        imageUrl : req.body.image
    }
        database.query('INSERT INTO images SET ?', image, (error, result) => {
            if (error) return res.status(500).json(error)
            res.status(201).json({message: 'Image ajoutée !'})
        }
    )    
};
