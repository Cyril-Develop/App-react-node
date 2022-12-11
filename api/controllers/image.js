const database = require('../db/mysql.js');

exports.getAllImages = (req, res) => {
    database.query('SELECT * FROM images', (error, result) => {
        if (error) return res.status(500).json(err);
        if (result === 0) return res.status(404).json([]);
        res.status(200).json(result) 
    })
};

exports.createImage = (req, res) => {
    res.send('Image created !');
};
