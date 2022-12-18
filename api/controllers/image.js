const database = require('../db/mysql.js');

exports.getAllImages = (req, res) => {
    database.query('SELECT * FROM images', (error, result) => {
        if (error) return res.status(500).json(err);
        if (result === 0) return res.status(404).json([]);
        res.status(200).json(result) 
    })
};

exports.getImagesPortrait = (req, res) => {
    database.query('SELECT * FROM images WHERE categorie = ?', 'portrait', (error, result) => {
        if (error) return res.status(500).json(err);
        if (result === 0) return res.status(404).json([]);
        res.status(200).json(result)
    })
};

exports.getImagesPaysage = (req, res) => {
    database.query('SELECT * FROM images WHERE categorie = ?', 'paysage', (error, result) => {
        if (error) return res.status(500).json(err);
        if (result === 0) return res.status(404).json([]);
        res.status(200).json(result)
    })
};

exports.getImagesAutre = (req, res) => {
    database.query('SELECT * FROM images WHERE categorie = ?', 'autre', (error, result) => {
        if (error) return res.status(500).json(err);
        if (result === 0) return res.status(404).json([]);
        res.status(200).json(result)
    })
};

exports.createImage = (req, res) => {
    console.log('req.file', req.file);
};
